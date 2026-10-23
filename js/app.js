/* ==========================================================================
   LUMIÈRE - Beauty & Personal Care App Controller
   Universal Navigation, Daylight Theme, State, Modals & Interactivity
   ========================================================================== */

// State Management
const AppState = {
  theme: localStorage.getItem('lumiere_theme') || localStorage.getItem('lumiere_daylight') || 'day',
  bookmarks: JSON.parse(localStorage.getItem('lumiere_bookmarks') || '["dir-1", "dir-3"]'),
  appointments: JSON.parse(localStorage.getItem('lumiere_appointments') || JSON.stringify([
    {
      id: "apt-101",
      directoryId: "dir-1",
      directoryName: "Aura Sanctuary & Botanical MedSpa",
      service: "Circadian Barrier Repair Facial",
      specialist: "Dr. Elena Vance, MD",
      date: "2026-10-25",
      time: "11:30 AM",
      status: "Confirmed",
      price: "$280"
    }
  ])),
  savedGuides: JSON.parse(localStorage.getItem('lumiere_saved_guides') || '["guide-1"]'),
  waterGlasses: parseInt(localStorage.getItem('lumiere_water_cups') || '5', 10),
  routineStreak: parseInt(localStorage.getItem('lumiere_streak') || '7', 10),
  activeRoutine: JSON.parse(localStorage.getItem('lumiere_active_routine') || JSON.stringify({
    skinType: 'dry',
    preset: 'balanced',
    generatedAt: '2026-10-20'
  })),
  amChecks: JSON.parse(localStorage.getItem('lumiere_am_checks') || '{"step-1":true,"step-2":true,"step-3":true,"step-4":false,"step-5":false}'),
  pmChecks: JSON.parse(localStorage.getItem('lumiere_pm_checks') || '{"step-1":false,"step-2":false,"step-3":false,"step-4":false}')
};

// Application Initialization
document.addEventListener('DOMContentLoaded', () => {
  initDaylightTheme();
  initHeaderCounters();
  initSharedComponents();
  
  // Page-specific initializers based on body id
  const pageId = document.body.dataset.page;
  if (pageId === 'home') initHomePage();
  if (pageId === 'directory') initDirectoryPage();
  if (pageId === 'guides') initGuidesPage();
  if (pageId === 'routine') initRoutinePage();
  if (pageId === 'community') initCommunityPage();
  if (pageId === 'dashboard') initDashboardPage();
});

/* ==========================================================================
   Day / Night Theme Controller
   ========================================================================== */
function applyTheme(themeMode) {
  AppState.theme = themeMode;
  localStorage.setItem('lumiere_theme', themeMode);
  localStorage.setItem('lumiere_daylight', themeMode);
  
  if (themeMode === 'night') {
    document.documentElement.setAttribute('data-theme', 'night');
    document.documentElement.setAttribute('data-daylight', 'night');
  } else {
    document.documentElement.setAttribute('data-theme', 'day');
    const daylightPreset = ['high-noon', 'golden-hour', 'morning-sun'].includes(themeMode) ? themeMode : 'morning-sun';
    document.documentElement.setAttribute('data-daylight', daylightPreset);
  }
  
  updateDayNightToggleButtons();
}

function updateDayNightToggleButtons() {
  const isNight = AppState.theme === 'night';
  document.querySelectorAll('.day-night-toggle-btn').forEach(btn => {
    btn.innerHTML = isNight 
      ? `<span class="toggle-icon">🌙</span><span>Night</span>` 
      : `<span class="toggle-icon">☀️</span><span>Day</span>`;
    btn.setAttribute('title', isNight ? 'Switch to Day Light Mode' : 'Switch to Night Mode');
  });

  document.querySelectorAll('.theme-btn').forEach(btn => {
    const mode = btn.dataset.mode;
    if (mode === 'night') {
      btn.classList.toggle('active', isNight);
    } else {
      btn.classList.toggle('active', !isNight && (AppState.theme === mode || (AppState.theme === 'day' && mode === 'morning-sun')));
    }
  });
}

function toggleDayNight() {
  const current = document.documentElement.getAttribute('data-theme') || 'day';
  const newTheme = current === 'night' ? 'day' : 'night';
  applyTheme(newTheme);
  showToast(newTheme === 'night' ? '🌙 Night Mode Activated (Cellular Recovery Theme)' : '☀️ Day Light Mode Activated', 'success');
}

window.toggleDayNight = toggleDayNight;

function initDaylightTheme() {
  applyTheme(AppState.theme);

  // Wire Day/Night header button
  document.querySelectorAll('.day-night-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleDayNight();
    });
  });

  // Top bar theme buttons
  const buttons = document.querySelectorAll('.theme-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;
      if (mode === 'night') {
        applyTheme('night');
        showToast('🌙 Night Mode Activated', 'success');
      } else {
        applyTheme(mode);
        showToast(`☀️ Daylight set to ${capitalize(mode.replace('-', ' '))}`, 'info');
      }
    });
  });
}

function initHeaderCounters() {
  const bookmarkCountEls = document.querySelectorAll('.bookmark-count-badge');
  bookmarkCountEls.forEach(el => {
    el.textContent = AppState.bookmarks.length;
  });
}

/* ==========================================================================
   Shared Components & Toast System
   ========================================================================== */
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icon = type === 'success' ? '✨' : (type === 'error' ? '⚠️' : '☀️');
  toast.innerHTML = `
    <span style="font-size: 1.2rem;">${icon}</span>
    <span style="font-weight: 500;">${message}</span>
  `;
  
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

function capitalize(str) {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}

/* Bookmark Toggle Handler */
function toggleBookmark(directoryId) {
  const idx = AppState.bookmarks.indexOf(directoryId);
  const isSaved = idx > -1;
  
  if (isSaved) {
    AppState.bookmarks.splice(idx, 1);
    showToast('Removed from your Saved Sanctuaries', 'info');
  } else {
    AppState.bookmarks.push(directoryId);
    showToast('Saved to your Daylight Sanctuary bookmarks!', 'success');
  }
  
  localStorage.setItem('lumiere_bookmarks', JSON.stringify(AppState.bookmarks));
  initHeaderCounters();
  
  // Update all matching bookmark buttons on page
  document.querySelectorAll(`.card-save-btn[data-id="${directoryId}"]`).forEach(btn => {
    btn.classList.toggle('saved', !isSaved);
    btn.innerHTML = !isSaved 
      ? `<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
      : `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
  });
  
  // If on dashboard, re-render bookmarks
  if (document.body.dataset.page === 'dashboard') {
    renderDashboardBookmarks();
  }
}

/* Modal Management */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function initSharedComponents() {
  // Close modals on clicking overlay background
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });
  
  // Close modal buttons
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) closeModal(modal.id);
    });
  });

  // Floating Back to Top
  const backToTopBtn = document.getElementById('floating-back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.transform = 'translateY(0)';
      } else {
        backToTopBtn.style.opacity = '0.5';
      }
    });
  }
}

/* ==========================================================================
   Home Page Controller
   ========================================================================== */
function initHomePage() {
  renderFeaturedDirectory();
  renderFeaturedGuides();
  setupFastSearch();
  initSkinQuizModal();
  initPackageShowcase();
}

function initPackageShowcase() {
  const tabsList = document.getElementById('package-tabs-list');
  if (!tabsList || !LUMIERE_DATA.carePackages) return;
  
  let activePackageId = LUMIERE_DATA.carePackages[0].id;
  
  function renderTabs() {
    tabsList.innerHTML = LUMIERE_DATA.carePackages.map(pkg => `
      <button class="package-tab-btn ${pkg.id === activePackageId ? 'active' : ''}" 
              data-id="${pkg.id}" 
              style="--tab-border-color: ${pkg.borderColor}; --tab-bg-color: ${pkg.bgColor};">
        <img class="package-tab-avatar" src="${pkg.avatar}" alt="${pkg.name}">
        <span class="package-tab-name">${pkg.name}</span>
      </button>
    `).join('');
    
    tabsList.querySelectorAll('.package-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activePackageId = btn.dataset.id;
        renderTabs();
        renderActivePackage(activePackageId);
      });
    });
  }
  
  function renderActivePackage(id) {
    const pkg = LUMIERE_DATA.carePackages.find(p => p.id === id) || LUMIERE_DATA.carePackages[0];
    const displayCard = document.getElementById('package-display-card');
    if (!displayCard) return;
    
    displayCard.innerHTML = `
      <div class="package-display-photo-wrap">
        <img class="package-display-photo" src="${pkg.image}" alt="${pkg.name}">
      </div>
      <div class="package-display-info">
        <div class="package-info-topbar">
          <span class="package-badge-tag">${pkg.badge}</span>
          <button class="btn-enquire" onclick="openPackageEnquiryModal('${pkg.id}')">
            <span>💬 Enquire Now</span>
          </button>
        </div>
        <h3 class="package-main-heading">${pkg.name}</h3>
        <p class="package-subheading">${pkg.subtitle}</p>
        
        <div class="perfect-for-header">Perfect for:</div>
        <div class="perfect-for-list">
          ${pkg.perfectFor.map(item => `
            <div class="perfect-for-item">
              <span class="perfect-for-dot"></span>
              <span>${item}</span>
            </div>
          `).join('')}
        </div>
        
        <div class="package-desc-box">
          <p>${pkg.description}</p>
        </div>
      </div>
    `;
  }
  
  renderTabs();
  renderActivePackage(activePackageId);
}

function openPackageEnquiryModal(pkgId) {
  const pkg = LUMIERE_DATA.carePackages.find(p => p.id === pkgId) || LUMIERE_DATA.carePackages[0];
  const nameEl = document.getElementById('enquiry-pkg-name');
  if (nameEl) nameEl.textContent = pkg.name;
  openModal('package-enquiry-modal');
}
window.openPackageEnquiryModal = openPackageEnquiryModal;

function renderFeaturedDirectory() {
  const container = document.getElementById('featured-directory-grid');
  if (!container) return;
  
  const featured = LUMIERE_DATA.directory.slice(0, 3);
  container.innerHTML = featured.map(item => createDirectoryCardHTML(item)).join('');
}

function renderFeaturedGuides() {
  const container = document.getElementById('featured-guides-grid');
  if (!container) return;
  
  const guides = LUMIERE_DATA.guides.slice(0, 3);
  container.innerHTML = guides.map(guide => createGuideCardHTML(guide)).join('');
}

function setupFastSearch() {
  const searchBtn = document.getElementById('hero-search-btn');
  const catSelect = document.getElementById('hero-category-select');
  const citySelect = document.getElementById('hero-city-select');
  
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const cat = catSelect ? catSelect.value : '';
      const city = citySelect ? citySelect.value : '';
      window.location.href = `directory.html?category=${encodeURIComponent(cat)}&city=${encodeURIComponent(city)}`;
    });
  }
}

function initSkinQuizModal() {
  const quizTrigger = document.getElementById('trigger-skin-quiz');
  if (quizTrigger) {
    quizTrigger.addEventListener('click', () => {
      openModal('skin-quiz-modal');
    });
  }
}

/* ==========================================================================
   Directory Portal Controller
   ========================================================================== */
function initDirectoryPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category') || 'All';
  const initialCity = urlParams.get('city') || 'All';
  
  let currentFilter = {
    search: '',
    category: initialCategory,
    city: initialCity,
    price: 'All',
    sort: 'rating'
  };
  
  const searchInput = document.getElementById('dir-search-input');
  const cityFilter = document.getElementById('dir-city-filter');
  const priceFilter = document.getElementById('dir-price-filter');
  const sortFilter = document.getElementById('dir-sort-filter');
  const categoryPills = document.querySelectorAll('.category-pill');
  
  // Set initial category pill
  categoryPills.forEach(pill => {
    if (pill.dataset.category === initialCategory) {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    }
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilter.category = pill.dataset.category;
      applyDirectoryFilters();
    });
  });
  
  if (cityFilter && initialCity !== 'All') {
    cityFilter.value = initialCity;
  }
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentFilter.search = e.target.value.toLowerCase().trim();
      applyDirectoryFilters();
    });
  }
  
  if (cityFilter) {
    cityFilter.addEventListener('change', (e) => {
      currentFilter.city = e.target.value;
      applyDirectoryFilters();
    });
  }
  
  if (priceFilter) {
    priceFilter.addEventListener('change', (e) => {
      currentFilter.price = e.target.value;
      applyDirectoryFilters();
    });
  }
  
  if (sortFilter) {
    sortFilter.addEventListener('change', (e) => {
      currentFilter.sort = e.target.value;
      applyDirectoryFilters();
    });
  }
  
  // View Toggle (Grid vs Map)
  const viewGridBtn = document.getElementById('view-grid-btn');
  const viewMapBtn = document.getElementById('view-map-btn');
  const gridView = document.getElementById('directory-grid-view');
  const mapView = document.getElementById('directory-map-view');
  
  if (viewGridBtn && viewMapBtn && gridView && mapView) {
    viewGridBtn.addEventListener('click', () => {
      viewGridBtn.classList.add('active');
      viewMapBtn.classList.remove('active');
      gridView.style.display = 'grid';
      mapView.style.display = 'none';
    });
    
    viewMapBtn.addEventListener('click', () => {
      viewMapBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
      gridView.style.display = 'none';
      mapView.style.display = 'grid';
      renderMapPins();
    });
  }
  
  function applyDirectoryFilters() {
    let filtered = LUMIERE_DATA.directory.filter(item => {
      const matchSearch = !currentFilter.search || 
        item.name.toLowerCase().includes(currentFilter.search) ||
        item.description.toLowerCase().includes(currentFilter.search) ||
        item.services.some(s => s.name.toLowerCase().includes(currentFilter.search));
      
      const matchCategory = currentFilter.category === 'All' || item.category === currentFilter.category;
      const matchCity = currentFilter.city === 'All' || item.city.toLowerCase().includes(currentFilter.city.toLowerCase());
      const matchPrice = currentFilter.price === 'All' || item.priceTier === currentFilter.price;
      
      return matchSearch && matchCategory && matchCity && matchPrice;
    });
    
    // Sort
    if (currentFilter.sort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentFilter.sort === 'reviews') {
      filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
    } else if (currentFilter.sort === 'price-low') {
      filtered.sort((a, b) => a.priceTier.length - b.priceTier.length);
    } else if (currentFilter.sort === 'price-high') {
      filtered.sort((a, b) => b.priceTier.length - a.priceTier.length);
    }
    
    const countEl = document.getElementById('directory-results-count');
    if (countEl) countEl.textContent = `${filtered.length} Sanctuary Listings Found`;
    
    const container = document.getElementById('directory-grid-view');
    if (container) {
      if (filtered.length === 0) {
        container.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-light);">
            <div style="font-size: 2.5rem; margin-bottom: 12px;">🌿</div>
            <h3 style="font-size: 1.6rem; margin-bottom: 8px;">No Sanctuaries Matched Your Criteria</h3>
            <p style="color: var(--text-muted); max-width: 440px; margin: 0 auto 20px auto;">Try clearing some filters or searching for treatments like "Barrier", "Scalp", or "Glow".</p>
            <button class="btn btn-secondary" onclick="resetDirectoryFilters()">Reset All Filters</button>
          </div>
        `;
      } else {
        container.innerHTML = filtered.map(item => createDirectoryCardHTML(item)).join('');
      }
    }
  }
  
  applyDirectoryFilters();
}

window.resetDirectoryFilters = function() {
  window.location.href = 'directory.html';
};

/* ==========================================================================
   Directory Card HTML Generator & Booking Modal
   ========================================================================== */
function createDirectoryCardHTML(item) {
  const isSaved = AppState.bookmarks.includes(item.id);
  return `
    <div class="card directory-card" data-id="${item.id}">
      <div class="directory-card-media">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <span class="card-badge-top">
          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          ${item.badge}
        </span>
        <button class="card-save-btn ${isSaved ? 'saved' : ''}" data-id="${item.id}" onclick="toggleBookmark('${item.id}')" title="Save Sanctuary">
          ${isSaved 
            ? `<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
            : `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
          }
        </button>
      </div>
      <div class="directory-card-content">
        <div class="directory-card-header">
          <span class="directory-category">${item.category}</span>
          <div class="directory-rating">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span>${item.rating}</span>
            <span style="font-weight: 400; color: var(--text-subtle);">(${item.reviewsCount})</span>
          </div>
        </div>
        <h3 class="directory-title">${item.name}</h3>
        <div class="directory-location">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>${item.city} &bull; ${item.address.split(',')[0]}</span>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 14px; line-height: 1.5;">${item.description}</p>
        <div class="directory-tags">
          ${item.amenities.map(a => `<span class="tag-pill">${a}</span>`).join('')}
        </div>
        <div class="directory-card-footer">
          <span class="price-indicator">${item.priceTier}</span>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary btn-sm" onclick="openDirectoryModal('${item.id}')">View Details</button>
            <button class="btn btn-primary btn-sm" onclick="startBooking('${item.id}')">Book Care</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function openDirectoryModal(id) {
  const item = LUMIERE_DATA.directory.find(d => d.id === id);
  if (!item) return;
  
  const modal = document.getElementById('directory-detail-modal');
  if (!modal) return;
  
  document.getElementById('modal-dir-title').textContent = item.name;
  document.getElementById('modal-dir-cat').textContent = item.category;
  document.getElementById('modal-dir-rating').textContent = `${item.rating} (${item.reviewsCount} reviews)`;
  document.getElementById('modal-dir-address').textContent = item.address;
  document.getElementById('modal-dir-phone').textContent = item.phone;
  document.getElementById('modal-dir-hours').textContent = item.hours;
  document.getElementById('modal-dir-desc').textContent = item.description;
  document.getElementById('modal-dir-img').src = item.image;
  
  const servicesList = document.getElementById('modal-dir-services');
  servicesList.innerHTML = item.services.map(s => `
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--border-light);">
      <div>
        <div style="font-weight: 600;">${s.name}</div>
        <div style="font-size: 0.8rem; color: var(--text-subtle);">${s.duration}</div>
      </div>
      <div style="text-align: right;">
        <span style="font-weight: 700; color: var(--gold-dark);">${s.price}</span>
      </div>
    </div>
  `).join('');
  
  const specialistsList = document.getElementById('modal-dir-specialists');
  specialistsList.innerHTML = item.specialists.map(sp => `
    <div style="display: flex; align-items: center; gap: 10px; padding: 8px 0;">
      <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--gold-soft); color: var(--gold-dark); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.8rem;">
        ${sp.name.split(' ').map(n => n[0]).join('')}
      </div>
      <div>
        <div style="font-weight: 600; font-size: 0.9rem;">${sp.name}</div>
        <div style="font-size: 0.78rem; color: var(--text-muted);">${sp.role}</div>
      </div>
    </div>
  `).join('');
  
  document.getElementById('modal-dir-book-btn').onclick = () => {
    closeModal('directory-detail-modal');
    startBooking(item.id);
  };
  
  openModal('directory-detail-modal');
}

window.openDirectoryModal = openDirectoryModal;

/* Appointment Booking Workflow */
function startBooking(id) {
  const item = LUMIERE_DATA.directory.find(d => d.id === id);
  if (!item) return;
  
  document.getElementById('booking-dir-id').value = item.id;
  document.getElementById('booking-dir-name').textContent = item.name;
  
  const serviceSelect = document.getElementById('booking-service-select');
  serviceSelect.innerHTML = item.services.map(s => `
    <option value="${s.name}" data-price="${s.price}">${s.name} (${s.duration} - ${s.price})</option>
  `).join('');
  
  const specialistSelect = document.getElementById('booking-specialist-select');
  specialistSelect.innerHTML = item.specialists.map(sp => `
    <option value="${sp.name}">${sp.name} (${sp.role})</option>
  `).join('');
  
  openModal('booking-modal');
}

window.startBooking = startBooking;

/* Booking Form Submission */
document.addEventListener('submit', (e) => {
  if (e.target.id === 'appointment-booking-form') {
    e.preventDefault();
    
    const dirId = document.getElementById('booking-dir-id').value;
    const item = LUMIERE_DATA.directory.find(d => d.id === dirId);
    const serviceSelect = document.getElementById('booking-service-select');
    const selectedService = serviceSelect.value;
    const selectedOption = serviceSelect.options[serviceSelect.selectedIndex];
    const price = selectedOption.dataset.price || '$250';
    const specialist = document.getElementById('booking-specialist-select').value;
    const date = document.getElementById('booking-date').value;
    const time = document.getElementById('booking-time').value;
    const clientName = document.getElementById('booking-client-name').value;
    
    const newAppointment = {
      id: 'apt-' + Date.now().toString().slice(-4),
      directoryId: dirId,
      directoryName: item.name,
      service: selectedService,
      specialist: specialist,
      date: date || '2026-10-28',
      time: time || '10:00 AM',
      status: 'Confirmed',
      price: price,
      clientName: clientName
    };
    
    AppState.appointments.unshift(newAppointment);
    localStorage.setItem('lumiere_appointments', JSON.stringify(AppState.appointments));
    
    closeModal('booking-modal');
    showToast(`Appointment confirmed at ${item.name}! Added to your Daylight Dashboard.`, 'success');
    
    if (document.body.dataset.page === 'dashboard') {
      renderDashboardAppointments();
    }
  }
});

/* ==========================================================================
   Beauty Guides Controller
   ========================================================================== */
function initGuidesPage() {
  renderGuidesCatalog();
  renderIngredientGlossary();
  
  // Category tabs for guides
  const guideTabs = document.querySelectorAll('.guide-filter-tab');
  guideTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      guideTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderGuidesCatalog(tab.dataset.category);
    });
  });
  
  // Ingredient search filter
  const ingSearch = document.getElementById('ingredient-search-input');
  if (ingSearch) {
    ingSearch.addEventListener('input', (e) => {
      renderIngredientGlossary(e.target.value.toLowerCase().trim());
    });
  }
}

function renderGuidesCatalog(category = 'All') {
  const container = document.getElementById('guides-catalog-grid');
  if (!container) return;
  
  let list = LUMIERE_DATA.guides;
  if (category !== 'All') {
    list = list.filter(g => g.category === category);
  }
  
  container.innerHTML = list.map(g => createGuideCardHTML(g)).join('');
}

function createGuideCardHTML(guide) {
  return `
    <div class="card guide-card">
      <div class="guide-media">
        <img src="${guide.image}" alt="${guide.title}" loading="lazy">
        <span class="guide-category-badge">${guide.category}</span>
      </div>
      <div class="guide-content">
        <div class="guide-meta">
          <span>${guide.readTime}</span> &bull;
          <span>${guide.date}</span>
        </div>
        <h3 class="guide-title">${guide.title}</h3>
        <p class="guide-excerpt">${guide.summary}</p>
        <div class="guide-footer">
          <div class="author-info">
            <div class="author-avatar">${guide.author.split(' ').map(n => n[0]).join('')}</div>
            <div>
              <div class="author-name">${guide.author}</div>
              <div style="font-size: 0.72rem; color: var(--text-subtle);">${guide.authorRole}</div>
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="readGuide('${guide.id}')">Read Guide</button>
        </div>
      </div>
    </div>
  `;
}

function readGuide(id) {
  const guide = LUMIERE_DATA.guides.find(g => g.id === id);
  if (!guide) return;
  
  document.getElementById('modal-guide-title').textContent = guide.title;
  document.getElementById('modal-guide-cat').textContent = guide.category;
  document.getElementById('modal-guide-meta').textContent = `${guide.readTime} • ${guide.author} (${guide.authorRole})`;
  document.getElementById('modal-guide-body').innerHTML = guide.content;
  
  const takeawaysList = document.getElementById('modal-guide-takeaways');
  takeawaysList.innerHTML = guide.takeaways.map(t => `
    <li style="margin-bottom: 8px; color: var(--text-main); font-weight: 500;">${t}</li>
  `).join('');
  
  openModal('guide-reader-modal');
}

window.readGuide = readGuide;

function renderIngredientGlossary(query = '') {
  const container = document.getElementById('ingredient-glossary-grid');
  if (!container) return;
  
  let list = LUMIERE_DATA.ingredients;
  if (query) {
    list = list.filter(i => 
      i.name.toLowerCase().includes(query) || 
      i.function.toLowerCase().includes(query) ||
      i.bestFor.toLowerCase().includes(query)
    );
  }
  
  container.innerHTML = list.map(item => `
    <div class="ingredient-card">
      <div class="ingredient-header">
        <span class="ewg-badge">EWG ${item.ewgScore}</span>
        <span style="font-size: 0.74rem; font-weight: 700; color: var(--gold-dark);">${item.routineTime}</span>
      </div>
      <h4 class="ingredient-name">${item.name}</h4>
      <div class="ingredient-function">${item.function}</div>
      <p class="ingredient-desc">${item.description}</p>
      <div class="ingredient-meta-row">
        <div><strong>Best for:</strong> ${item.bestFor}</div>
      </div>
      <div style="font-size: 0.74rem; color: #B85D43; margin-top: 6px;">
        <strong>Avoid with:</strong> ${item.avoidWith}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Routine Builder Controller
   ========================================================================== */
function initRoutinePage() {
  let builderState = {
    skinType: 'dry',
    depth: 'balanced',
    goals: ['hydration', 'barrier']
  };
  
  // Skin type options
  document.querySelectorAll('.skin-type-option').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.skin-type-option').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      builderState.skinType = card.dataset.value;
      renderGeneratedRoutine(builderState);
    });
  });
  
  // Depth options
  document.querySelectorAll('.depth-option').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.depth-option').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      builderState.depth = card.dataset.value;
      renderGeneratedRoutine(builderState);
    });
  });
  
  // AM / PM Tab toggle
  const amTabBtn = document.getElementById('routine-tab-am');
  const pmTabBtn = document.getElementById('routine-tab-pm');
  const amPanel = document.getElementById('routine-panel-am');
  const pmPanel = document.getElementById('routine-panel-pm');
  
  if (amTabBtn && pmTabBtn) {
    amTabBtn.addEventListener('click', () => {
      amTabBtn.classList.add('active');
      pmTabBtn.classList.remove('active');
      amPanel.style.display = 'block';
      pmPanel.style.display = 'none';
    });
    
    pmTabBtn.addEventListener('click', () => {
      pmTabBtn.classList.add('active');
      amTabBtn.classList.remove('active');
      amPanel.style.display = 'none';
      pmPanel.style.display = 'block';
    });
  }
  
  // Save routine button
  const saveBtn = document.getElementById('save-routine-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      AppState.activeRoutine = {
        skinType: builderState.skinType,
        preset: builderState.depth,
        savedAt: new Date().toLocaleDateString()
      };
      localStorage.setItem('lumiere_active_routine', JSON.stringify(AppState.activeRoutine));
      showToast('Custom Daylight Routine saved to your Dashboard!', 'success');
    });
  }
  
  renderGeneratedRoutine(builderState);
}

function renderGeneratedRoutine(state) {
  const amContainer = document.getElementById('routine-steps-am');
  const pmContainer = document.getElementById('routine-steps-pm');
  if (!amContainer || !pmContainer) return;
  
  const typeData = LUMIERE_DATA.routinePresets[state.skinType] || LUMIERE_DATA.routinePresets.dry;
  const routine = typeData[state.depth] || typeData.balanced || LUMIERE_DATA.routinePresets.dry.balanced;
  
  amContainer.innerHTML = routine.am.map(item => `
    <div class="routine-step-item">
      <div class="step-number-badge">${item.step}</div>
      <div style="flex: 1;">
        <div style="font-size: 0.76rem; font-weight: 700; text-transform: uppercase; color: var(--gold-dark); letter-spacing: 0.05em;">Step ${item.step} AM Daylight Shield</div>
        <h4 style="font-size: 1.2rem; margin: 2px 0 4px 0;">${item.name}</h4>
        <div style="font-size: 0.85rem; color: var(--sage-primary); font-weight: 600; margin-bottom: 4px;">Key Actives: ${item.ingredient}</div>
        <p style="font-size: 0.88rem; color: var(--text-muted);">${item.tip}</p>
      </div>
    </div>
  `).join('');
  
  pmContainer.innerHTML = routine.pm.map(item => `
    <div class="routine-step-item">
      <div class="step-number-badge" style="background: var(--sage-light); color: var(--sage-primary);">${item.step}</div>
      <div style="flex: 1;">
        <div style="font-size: 0.76rem; font-weight: 700; text-transform: uppercase; color: var(--sage-primary); letter-spacing: 0.05em;">Step ${item.step} PM Cellular Recovery</div>
        <h4 style="font-size: 1.2rem; margin: 2px 0 4px 0;">${item.name}</h4>
        <div style="font-size: 0.85rem; color: var(--gold-dark); font-weight: 600; margin-bottom: 4px;">Key Actives: ${item.ingredient}</div>
        <p style="font-size: 0.88rem; color: var(--text-muted);">${item.tip}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Community & Q&A Controller
   ========================================================================== */
function initCommunityPage() {
  renderCommunityThreads();
  
  const questionForm = document.getElementById('ask-specialist-form');
  if (questionForm) {
    questionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const topic = document.getElementById('q-topic').value;
      const title = document.getElementById('q-title').value;
      const body = document.getElementById('q-body').value;
      
      const newThread = {
        id: 'th-' + Date.now(),
        author: 'You (Daylight Seeker)',
        avatar: 'ME',
        time: 'Just now',
        topic: topic,
        title: title,
        body: body,
        upvotes: 1,
        commentsCount: 1,
        answeredByExpert: true,
        expertAnswer: {
          expertName: "Dr. Elena Vance, MD",
          expertRole: "Board-Certified Dermatologist",
          avatar: "EV",
          badge: "Verified Medical Pro",
          answer: "Thank you for posting in the Daylight Sanctuary! Based on clinical dermatology guidelines, maintain consistent barrier hydration and sunscreen protection before combining further active compounds."
        }
      };
      
      LUMIERE_DATA.communityThreads.unshift(newThread);
      renderCommunityThreads();
      closeModal('ask-specialist-modal');
      showToast('Question submitted! A verified specialist just responded.', 'success');
      questionForm.reset();
    });
  }
}

function renderCommunityThreads() {
  const container = document.getElementById('community-threads-list');
  if (!container) return;
  
  container.innerHTML = LUMIERE_DATA.communityThreads.map(th => `
    <div class="community-thread-card">
      <div class="thread-user-row">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--bg-secondary); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem; color: var(--text-main);">
            ${th.avatar}
          </div>
          <div>
            <div style="font-weight: 700; font-size: 0.92rem;">${th.author}</div>
            <div style="font-size: 0.75rem; color: var(--text-subtle);">${th.time} &bull; <span style="color: var(--gold-dark); font-weight: 600;">${th.topic}</span></div>
          </div>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="upvoteThread('${th.id}', this)">
          ▲ ${th.upvotes}
        </button>
      </div>
      <h3 style="font-size: 1.4rem; margin: 10px 0 8px 0;">${th.title}</h3>
      <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 14px;">${th.body}</p>
      
      ${th.answeredByExpert ? `
        <div class="thread-expert-answer">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-weight: 700; font-size: 0.88rem; color: var(--sage-primary);">${th.expertAnswer.expertName}</span>
              <span style="font-size: 0.7rem; background: var(--sage-primary); color: white; padding: 2px 6px; border-radius: var(--radius-full); font-weight: 600;">${th.expertAnswer.badge}</span>
            </div>
            <span style="font-size: 0.75rem; color: var(--text-subtle);">${th.expertAnswer.expertRole}</span>
          </div>
          <p style="font-size: 0.9rem; color: var(--text-main); font-style: italic;">"${th.expertAnswer.answer}"</p>
        </div>
      ` : ''}
    </div>
  `).join('');
}

window.upvoteThread = function(threadId, btn) {
  const thread = LUMIERE_DATA.communityThreads.find(t => t.id === threadId);
  if (thread) {
    thread.upvotes += 1;
    btn.innerHTML = `▲ ${thread.upvotes}`;
    btn.style.borderColor = 'var(--gold-primary)';
    btn.style.color = 'var(--gold-dark)';
    showToast('Upvoted!', 'success');
  }
};

/* ==========================================================================
   Dashboard Controller
   ========================================================================== */
function initDashboardPage() {
  updateDashboardGreetings();
  renderDashboardStats();
  renderDashboardAppointments();
  renderDashboardBookmarks();
  initWaterTracker();
  initRoutineChecklists();
  initProviderModeToggle();
}

function updateDashboardGreetings() {
  const greetingEl = document.getElementById('dashboard-greeting-text');
  if (!greetingEl) return;
  
  const hour = new Date().getHours();
  let timeStr = 'Good Morning';
  if (hour >= 12 && hour < 17) timeStr = 'Good Afternoon';
  if (hour >= 17) timeStr = 'Good Evening';
  
  greetingEl.textContent = `${timeStr}, Radiance Seeker`;
}

function renderDashboardStats() {
  const streakEl = document.getElementById('dash-streak-count');
  const bookmarkEl = document.getElementById('dash-bookmarks-count');
  const appointmentsEl = document.getElementById('dash-appointments-count');
  
  if (streakEl) streakEl.textContent = `${AppState.routineStreak} Days`;
  if (bookmarkEl) bookmarkEl.textContent = AppState.bookmarks.length;
  if (appointmentsEl) appointmentsEl.textContent = AppState.appointments.length;
}

function renderDashboardAppointments() {
  const container = document.getElementById('dashboard-appointments-list');
  if (!container) return;
  
  if (AppState.appointments.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 32px 16px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-light);">
        <p style="color: var(--text-muted); margin-bottom: 12px;">No active appointments booked yet.</p>
        <a href="directory.html" class="btn btn-primary btn-sm">Explore Sanctuaries & Book Care</a>
      </div>
    `;
    return;
  }
  
  container.innerHTML = AppState.appointments.map(apt => `
    <div style="background: var(--bg-card-solid); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 20px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; gap: 16px;">
      <div>
        <span style="font-size: 0.72rem; font-weight: 700; background: var(--sage-light); color: var(--sage-primary); padding: 3px 8px; border-radius: var(--radius-full); text-transform: uppercase;">
          ${apt.status}
        </span>
        <h4 style="font-size: 1.25rem; margin: 6px 0 2px 0;">${apt.directoryName}</h4>
        <div style="font-size: 0.88rem; font-weight: 600; color: var(--gold-dark);">${apt.service} (${apt.price})</div>
        <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 4px;">
          🗓️ ${apt.date} at ${apt.time} &bull; Specialist: ${apt.specialist}
        </div>
      </div>
      <div style="text-align: right; display: flex; flex-direction: column; gap: 8px;">
        <button class="btn btn-secondary btn-sm" onclick="cancelAppointment('${apt.id}')">Cancel</button>
        <button class="btn btn-primary btn-sm" onclick="showToast('Directions sent to your mobile device!', 'info')">Get Directions</button>
      </div>
    </div>
  `).join('');
}

window.cancelAppointment = function(aptId) {
  if (confirm('Are you sure you want to cancel this sanctuary appointment?')) {
    AppState.appointments = AppState.appointments.filter(a => a.id !== aptId);
    localStorage.setItem('lumiere_appointments', JSON.stringify(AppState.appointments));
    renderDashboardAppointments();
    renderDashboardStats();
    showToast('Appointment successfully cancelled.', 'info');
  }
};

function renderDashboardBookmarks() {
  const container = document.getElementById('dashboard-bookmarks-list');
  if (!container) return;
  
  const saved = LUMIERE_DATA.directory.filter(d => AppState.bookmarks.includes(d.id));
  if (saved.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 32px 16px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-light);">
        <p style="color: var(--text-muted); margin-bottom: 12px;">No saved beauty sanctuaries yet.</p>
        <a href="directory.html" class="btn btn-secondary btn-sm">Browse Directory</a>
      </div>
    `;
    return;
  }
  
  container.innerHTML = saved.map(item => `
    <div style="display: flex; align-items: center; gap: 14px; background: var(--bg-card-solid); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 12px 16px; margin-bottom: 10px;">
      <img src="${item.image}" alt="${item.name}" style="width: 56px; height: 56px; border-radius: var(--radius-sm); object-fit: cover;">
      <div style="flex: 1;">
        <h4 style="font-size: 1.05rem; margin-bottom: 2px;">${item.name}</h4>
        <div style="font-size: 0.78rem; color: var(--text-muted);">${item.city} &bull; ${item.category}</div>
      </div>
      <div style="display: flex; gap: 6px;">
        <button class="btn btn-secondary btn-sm" onclick="openDirectoryModal('${item.id}')">View</button>
        <button class="btn btn-secondary btn-sm" onclick="toggleBookmark('${item.id}')" title="Remove">✕</button>
      </div>
    </div>
  `).join('');
}

function initWaterTracker() {
  const countEl = document.getElementById('water-count-display');
  const cupsContainer = document.getElementById('water-cups-container');
  if (!countEl || !cupsContainer) return;
  
  renderWaterCups();
  
  function renderWaterCups() {
    countEl.textContent = `${AppState.waterGlasses} / 8 Glasses (2.0L)`;
    cupsContainer.innerHTML = '';
    for (let i = 1; i <= 8; i++) {
      const isFilled = i <= AppState.waterGlasses;
      const cup = document.createElement('button');
      cup.className = `water-cup-btn ${isFilled ? 'filled' : ''}`;
      cup.textContent = `${i * 250}ml`;
      cup.onclick = () => {
        AppState.waterGlasses = isFilled && i === AppState.waterGlasses ? i - 1 : i;
        localStorage.setItem('lumiere_water_cups', AppState.waterGlasses);
        renderWaterCups();
        showToast(`Hydration updated: ${AppState.waterGlasses * 250} ml`, 'info');
      };
      cupsContainer.appendChild(cup);
    }
  }
}

function initRoutineChecklists() {
  const amChecklist = document.getElementById('dash-am-checklist');
  const pmChecklist = document.getElementById('dash-pm-checklist');
  
  if (amChecklist) {
    amChecklist.querySelectorAll('.checklist-item').forEach(item => {
      const stepKey = item.dataset.step;
      if (AppState.amChecks[stepKey]) item.classList.add('checked');
      
      item.onclick = () => {
        const isChecked = item.classList.toggle('checked');
        AppState.amChecks[stepKey] = isChecked;
        localStorage.setItem('lumiere_am_checks', JSON.stringify(AppState.amChecks));
        if (isChecked) showToast('Step complete! Skin barrier protected ✨', 'success');
      };
    });
  }
  
  if (pmChecklist) {
    pmChecklist.querySelectorAll('.checklist-item').forEach(item => {
      const stepKey = item.dataset.step;
      if (AppState.pmChecks[stepKey]) item.classList.add('checked');
      
      item.onclick = () => {
        const isChecked = item.classList.toggle('checked');
        AppState.pmChecks[stepKey] = isChecked;
        localStorage.setItem('lumiere_pm_checks', JSON.stringify(AppState.pmChecks));
        if (isChecked) showToast('Night repair step completed 🌙', 'success');
      };
    });
  }
}

function initProviderModeToggle() {
  const clientView = document.getElementById('client-dashboard-view');
  const providerView = document.getElementById('provider-dashboard-view');
  const toggleBtn = document.getElementById('switch-portal-mode-btn');
  
  if (toggleBtn && clientView && providerView) {
    let isProvider = false;
    toggleBtn.addEventListener('click', () => {
      isProvider = !isProvider;
      if (isProvider) {
        clientView.style.display = 'none';
        providerView.style.display = 'block';
        toggleBtn.textContent = 'Switch to Client Sanctuary View';
        showToast('Switched to Practitioner & Clinic Portal', 'info');
      } else {
        clientView.style.display = 'block';
        providerView.style.display = 'none';
        toggleBtn.textContent = 'Practitioner & Clinic Portal';
        showToast('Switched to Client Sanctuary View', 'info');
      }
    });
  }
  
  // Provider Listing Submission Form
  const providerForm = document.getElementById('new-clinic-listing-form');
  if (providerForm) {
    providerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('new-clinic-name').value;
      const category = document.getElementById('new-clinic-category').value;
      const city = document.getElementById('new-clinic-city').value;
      const price = document.getElementById('new-clinic-price').value;
      
      const newListing = {
        id: 'dir-' + Date.now(),
        name: name,
        category: category,
        rating: 5.0,
        reviewsCount: 1,
        city: city,
        address: `${city} Central Studio`,
        phone: "+1 (555) 902-1200",
        priceTier: price,
        image: "assets/images/spa.jpg",
        badge: "New Pro Listing",
        featured: false,
        daylightPick: true,
        description: "Freshly certified daylight aesthetic sanctuary offering tailored treatments and clean wellness.",
        hours: "Mon - Sat: 9:00 AM - 6:00 PM",
        specialists: [{ name: "Lead Specialist", role: "Licensed Practitioner" }],
        amenities: ["Online Booking", "Cruelty-Free"],
        services: [{ name: "Initial Radiance Consultation", duration: "45 min", price: "$150" }]
      };
      
      LUMIERE_DATA.directory.unshift(newListing);
      showToast(`Congratulations! "${name}" has been published to the directory portal.`, 'success');
      providerForm.reset();
    });
  }
}
