const EVENT_META = {
    '3108-CTF-KembaraTuah': { label: '3108 CTF KembaraTuah', date: '2025-01-15' },
    GreyCTF2025: { label: 'GreyCTF 2025', date: '2025-01-20' },
    'N3XT_L3V3L CTF': { label: 'N3XT L3V3L CTF', date: '2025-01-10' },
    'ICS-CTF': { label: 'ICS-CTF', date: '2024-12-01' },
    'HTB-Machines': { label: 'HTB Machines', date: '2025-10-01' },
    'HTB-SHERLOCK': { label: 'HTB Sherlock', date: '2025-09-02' }
};

const WRITEUP_CATALOG = [
    { title: 'Idk', event: 'GreyCTF2025', category: 'General', platform: 'CTF', path: 'GreyCTF2025/Idk.md' },
    { title: 'elijah', event: 'GreyCTF2025', category: 'General', platform: 'CTF', path: 'GreyCTF2025/elijah.md' },
    { title: 'connection issues', event: 'GreyCTF2025', category: 'General', platform: 'CTF', path: 'GreyCTF2025/connection issues.md' },
    { title: 'Uwusignatures', event: 'GreyCTF2025', category: 'General', platform: 'CTF', path: 'GreyCTF2025/Uwusignatures.md' },
    { title: 'reversing 101', event: 'GreyCTF2025', category: 'General', platform: 'CTF', path: 'GreyCTF2025/reversing 101.md' },
    { title: 'truth or lie', event: 'ICS-CTF', category: 'General', platform: 'CTF', path: 'ICS-CTF/truth or lie.md' },
    { title: 'Welcome', event: 'N3XT_L3V3L CTF', category: 'General', platform: 'CTF', path: 'N3XT_L3V3L CTF/Welcome.md' },
    { title: 'Vault Door(RE)', event: 'N3XT_L3V3L CTF', category: 'General', platform: 'CTF', path: 'N3XT_L3V3L CTF/Vault Door(RE).md' },
    { title: 'zZzZz', event: '3108-CTF-KembaraTuah', category: 'Cryptography', platform: 'CTF', path: '3108-CTF-KembaraTuah/Cryptography/zZzZz.md' },
    { title: 'tanpa nama 3', event: '3108-CTF-KembaraTuah', category: 'Cryptography', platform: 'CTF', path: '3108-CTF-KembaraTuah/Cryptography/tanpa nama 3.md' },
    { title: 'Syah Sesat', event: '3108-CTF-KembaraTuah', category: 'Cryptography', platform: 'CTF', path: '3108-CTF-KembaraTuah/Cryptography/Syah Sesat.md' },
    { title: 'Sembunyi', event: '3108-CTF-KembaraTuah', category: 'Cryptography', platform: 'CTF', path: '3108-CTF-KembaraTuah/Cryptography/Sembunyi.md' },
    { title: 'Sambungan telefon', event: '3108-CTF-KembaraTuah', category: 'Cryptography', platform: 'CTF', path: '3108-CTF-KembaraTuah/Cryptography/Sambungan telefon.md' },
    { title: 'Pandak Lam', event: '3108-CTF-KembaraTuah', category: 'Cryptography', platform: 'CTF', path: '3108-CTF-KembaraTuah/Cryptography/Pandak Lam.md' },
    { title: 'Mesej Rahsia', event: '3108-CTF-KembaraTuah', category: 'Cryptography', platform: 'CTF', path: '3108-CTF-KembaraTuah/Cryptography/Mesej Rahsia.md' },
    { title: 'Kekacauan Huruf', event: '3108-CTF-KembaraTuah', category: 'Cryptography', platform: 'CTF', path: '3108-CTF-KembaraTuah/Cryptography/Kekacauan Huruf.md' },
    { title: 'Jauh Bini Umohnya', event: '3108-CTF-KembaraTuah', category: 'Cryptography', platform: 'CTF', path: '3108-CTF-KembaraTuah/Cryptography/Jauh Bini Umohnya.md' },
    { title: 'Car Fire', event: '3108-CTF-KembaraTuah', category: 'Cryptography', platform: 'CTF', path: '3108-CTF-KembaraTuah/Cryptography/Car Fire.md' },
    { title: 'Wordle Bahasa Utaqa', event: '3108-CTF-KembaraTuah', category: 'Web', platform: 'CTF', path: '3108-CTF-KembaraTuah/Web/Wordle Bahasa Utaqa.md' },
    { title: 'Sultan yang hilang', event: '3108-CTF-KembaraTuah', category: 'Web', platform: 'CTF', path: '3108-CTF-KembaraTuah/Web/Sultan yang hilang.md' },
    { title: 'walkthrough', event: 'HTB-SHERLOCK', category: 'RomCOm', platform: 'HTB', path: 'HTB-SHERLOCK/RomCOm/walkthrough.md' },
    { title: 'Pahlawan Lagenda', event: '3108-CTF-KembaraTuah', category: 'Misc', platform: 'CTF', path: '3108-CTF-KembaraTuah/Misc/Pahlawan Lagenda.md' },
    { title: 'Cer Cari', event: '3108-CTF-KembaraTuah', category: 'Misc', platform: 'CTF', path: '3108-CTF-KembaraTuah/Misc/Cer Cari.md' },
    { title: 'Perigi', event: '3108-CTF-KembaraTuah', category: 'Misc', platform: 'CTF', path: '3108-CTF-KembaraTuah/Misc/Perigi.md' },
    { title: 'Bank', event: 'ICS-CTF', category: 'General', platform: 'CTF', path: 'ICS-CTF/Bank.md' },
    { title: 'Babyweb', event: 'ICS-CTF', category: 'General', platform: 'CTF', path: 'ICS-CTF/Babyweb.md' },
    { title: 'crackme', event: 'ICS-CTF', category: 'General', platform: 'CTF', path: 'ICS-CTF/crackme.md' },
    { title: 'mindfullnes', event: 'ICS-CTF', category: 'General', platform: 'CTF', path: 'ICS-CTF/mindfullnes.md' },
    { title: 'Hidden, Yet Bare(Crypto)', event: 'N3XT_L3V3L CTF', category: 'General', platform: 'CTF', path: 'N3XT_L3V3L CTF/Hidden, Yet Bare(Crypto).md' },
    { title: 'Common Ground(crypto)', event: 'N3XT_L3V3L CTF', category: 'General', platform: 'CTF', path: 'N3XT_L3V3L CTF/Common Ground(crypto).md' },
    { title: 'Bypass Password(RE)', event: 'N3XT_L3V3L CTF', category: 'General', platform: 'CTF', path: 'N3XT_L3V3L CTF/Bypass Password(RE).md' },
    { title: 'Malware(OSINT)', event: 'N3XT_L3V3L CTF', category: 'General', platform: 'CTF', path: 'N3XT_L3V3L CTF/Malware(OSINT).md' },
    { title: 'In the dark for light(RE)', event: 'N3XT_L3V3L CTF', category: 'General', platform: 'CTF', path: 'N3XT_L3V3L CTF/In the dark for light(RE).md' },
    { title: 'robots(web)', event: 'N3XT_L3V3L CTF', category: 'General', platform: 'CTF', path: 'N3XT_L3V3L CTF/robots(web).md' },
    { title: 'codeparttwo', event: 'HTB-Machines', category: 'codeparttwo', platform: 'HTB', path: 'HTB-Machines/codeparttwo/codeparttwo.md' },
    { title: 'Tinggi Lagi', event: '3108-CTF-KembaraTuah', category: 'OSINT', platform: 'CTF', path: '3108-CTF-KembaraTuah/OSINT/Tinggi Lagi.md' },
    { title: 'Rawsec', event: '3108-CTF-KembaraTuah', category: 'OSINT', platform: 'CTF', path: '3108-CTF-KembaraTuah/OSINT/Rawsec.md' },
    { title: 'YAYASANDIGITALMALAYSIA', event: '3108-CTF-KembaraTuah', category: 'OSINT', platform: 'CTF', path: '3108-CTF-KembaraTuah/OSINT/YAYASANDIGITALMALAYSIA.md' },
    { title: 'Kontras', event: '3108-CTF-KembaraTuah', category: 'Forensic', platform: 'CTF', path: '3108-CTF-KembaraTuah/Forensic/Kontras.md' },
    { title: 'Mamu Kasi Tau', event: '3108-CTF-KembaraTuah', category: 'Forensic', platform: 'CTF', path: '3108-CTF-KembaraTuah/Forensic/Mamu Kasi Tau.md' },
    { title: 'Cordini', event: '3108-CTF-KembaraTuah', category: 'Forensic', platform: 'CTF', path: '3108-CTF-KembaraTuah/Forensic/Cordini.md' },
    { title: 'Makanan Popular', event: '3108-CTF-KembaraTuah', category: 'Forensic', platform: 'CTF', path: '3108-CTF-KembaraTuah/Forensic/Makanan Popular.md' }
];

const CATEGORY_COLORS = {
    cryptography: '#7f8fff',
    forensic: '#59e8c4',
    reversing: '#ff8fae',
    web: '#ffbf76',
    osint: '#63d8ff',
    misc: '#b4c4ff'
};

const refs = {};

const state = {
    all: [],
    filtered: [],
    active: null,
    motionLite: false
};

function init() {
    state.motionLite = isMotionLiteDevice();
    if (state.motionLite) document.body.classList.add('mobile-motion-lite');
    cacheDom();
    state.all = normalizeCatalog(WRITEUP_CATALOG);
    bindEvents();
    initCursorEffects();
    applyBackgroundParallax(state.motionLite ? 0 : (window.scrollY || 0));
    renderStats();
    buildFilters();
    renderQuickTags();
    renderTimeline();
    renderCards();
    renderHtbFocus();
}

function cacheDom() {
    refs.searchInput = document.getElementById('searchInput');
    refs.platformFilter = document.getElementById('platformFilter');
    refs.eventFilter = document.getElementById('eventFilter');
    refs.categoryFilter = document.getElementById('categoryFilter');
    refs.sortFilter = document.getElementById('sortFilter');
    refs.clearFilters = document.getElementById('clearFilters');
    refs.quickTags = document.getElementById('quickTags');
    refs.resultMeta = document.getElementById('resultMeta');
    refs.eventTimeline = document.getElementById('eventTimeline');
    refs.writeupGrid = document.getElementById('writeupGrid');
    refs.htbFocusCards = document.getElementById('htbFocusCards');
    refs.statWriteups = document.getElementById('statWriteups');
    refs.statEvents = document.getElementById('statEvents');
    refs.statHtb = document.getElementById('statHtb');
    refs.openLatest = document.getElementById('openLatest');
    refs.backToTop = document.getElementById('backToTop');
    refs.menuToggle = document.getElementById('menuToggle');
    refs.navLinks = document.getElementById('navLinks');

    refs.readerModal = document.getElementById('readerModal');
    refs.closeReader = document.getElementById('closeReader');
    refs.readerTitle = document.getElementById('readerTitle');
    refs.readerSubtitle = document.getElementById('readerSubtitle');
    refs.readerKicker = document.getElementById('readerKicker');
    refs.openRawLink = document.getElementById('openRawLink');
    refs.readerProgressBar = document.getElementById('readerProgressBar');
    refs.readerContent = document.getElementById('readerContent');
    refs.readerMain = document.querySelector('.reader-main');
    refs.readerShell = document.querySelector('.reader-shell');
    refs.readerContentWrap = document.getElementById('readerScroll');
    refs.readerToc = document.querySelector('.reader-toc');
    refs.tocList = document.getElementById('tocList');
    refs.imageGallery = document.getElementById('imageGallery');

    refs.imageLightbox = document.getElementById('imageLightbox');
    refs.lightboxImage = document.getElementById('lightboxImage');
    refs.closeLightbox = document.getElementById('closeLightbox');

    if (refs.readerMain) refs.readerMain.setAttribute('tabindex', '0');
}

function normalizeCatalog(raw) {
    return raw.map((item, index) => {
        const eventMeta = EVENT_META[item.event] || { label: item.event, date: '2025-01-01' };
        const normalizedCategory = normalizeCategory(item.category, item.title, item.path);
        return {
            ...item,
            id: `w-${index + 1}`,
            eventLabel: eventMeta.label,
            date: eventMeta.date,
            timestamp: Date.parse(eventMeta.date),
            category: normalizedCategory,
            categoryLabel: toDisplayCategory(normalizedCategory)
        };
    });
}

function normalizeCategory(original, title, path) {
    const lower = (original || '').toLowerCase();
    if (lower !== 'general' && lower !== 'codeparttwo' && lower !== 'romcom') {
        return lower;
    }

    const haystack = `${title} ${path}`.toLowerCase();
    if (/(crypto|cipher|rsa|signature|truth or lie)/.test(haystack)) return 'cryptography';
    if (/(re|reversing|crackme|vault|bypass|dark)/.test(haystack)) return 'reversing';
    if (/(web|babyweb|robots|sultan|wordle)/.test(haystack)) return 'web';
    if (/(osint|rawsec|malware)/.test(haystack)) return 'osint';
    if (/(forensic|pcap|sherlock|romcom|bank|mindfull)/.test(haystack)) return 'forensic';
    return 'misc';
}

function toDisplayCategory(category) {
    return category
        .split(/[^a-z0-9]/i)
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
}

function bindEvents() {
    refs.searchInput.addEventListener('input', renderCards);
    refs.platformFilter.addEventListener('change', renderCards);
    refs.eventFilter.addEventListener('change', renderCards);
    refs.categoryFilter.addEventListener('change', renderCards);
    refs.sortFilter.addEventListener('change', renderCards);

    refs.clearFilters.addEventListener('click', () => {
        refs.searchInput.value = '';
        refs.platformFilter.value = 'all';
        refs.eventFilter.value = 'all';
        refs.categoryFilter.value = 'all';
        refs.sortFilter.value = 'recent';
        refs.quickTags.querySelectorAll('.tag-btn').forEach((btn) => btn.classList.remove('active'));
        renderCards();
    });

    refs.openLatest.addEventListener('click', () => {
        const latestHtb = [...state.all]
            .filter((item) => item.platform === 'HTB')
            .sort((a, b) => b.timestamp - a.timestamp)[0];
        if (latestHtb) openWriteup(latestHtb.id);
    });

    refs.closeReader.addEventListener('click', closeReader);

    refs.readerModal.addEventListener('click', (event) => {
        if (event.target === refs.readerModal) closeReader();
    });

    refs.readerMain.addEventListener('scroll', updateReaderProgress);
    if (refs.readerShell) {
        refs.readerShell.addEventListener('wheel', handleReaderShellWheel, { passive: false });
    }

    refs.closeLightbox.addEventListener('click', closeLightbox);
    refs.imageLightbox.addEventListener('click', (event) => {
        if (event.target === refs.imageLightbox) closeLightbox();
    });

    refs.menuToggle.addEventListener('click', () => {
        refs.navLinks.classList.toggle('open');
    });

    document.querySelectorAll('.nav-links a').forEach((link) => {
        link.addEventListener('click', () => refs.navLinks.classList.remove('open'));
    });

    let scrollTicking = false;
    window.addEventListener('scroll', () => {
        if (scrollTicking) return;
        scrollTicking = true;
        requestAnimationFrame(() => {
            const y = window.scrollY || 0;
            if (y > 500) refs.backToTop.classList.add('visible');
            else refs.backToTop.classList.remove('visible');
            if (!state.motionLite) applyBackgroundParallax(y);
            scrollTicking = false;
        });
    }, { passive: true });

    refs.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeLightbox();
            closeReader();
        }
    });
}

function renderStats() {
    const eventCount = new Set(state.all.map((item) => item.event)).size;
    const htbCount = state.all.filter((item) => item.platform === 'HTB').length;

    refs.statWriteups.textContent = String(state.all.length);
    refs.statEvents.textContent = String(eventCount);
    refs.statHtb.textContent = String(htbCount);
}

function buildFilters() {
    const events = [...new Set(state.all.map((item) => item.eventLabel))].sort((a, b) => a.localeCompare(b));
    const categories = [...new Set(state.all.map((item) => item.category))].sort((a, b) => a.localeCompare(b));

    refs.eventFilter.innerHTML = '<option value="all">All events</option>';
    events.forEach((eventLabel) => {
        const option = document.createElement('option');
        option.value = eventLabel;
        option.textContent = eventLabel;
        refs.eventFilter.appendChild(option);
    });

    refs.categoryFilter.innerHTML = '<option value="all">All categories</option>';
    categories.forEach((category) => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = toDisplayCategory(category);
        refs.categoryFilter.appendChild(option);
    });
}

function renderQuickTags() {
    const counts = {};
    state.all.forEach((item) => {
        counts[item.category] = (counts[item.category] || 0) + 1;
    });

    refs.quickTags.innerHTML = '';

    Object.keys(counts)
        .sort((a, b) => counts[b] - counts[a])
        .slice(0, 6)
        .forEach((category) => {
            const button = document.createElement('button');
            button.className = 'tag-btn';
            button.textContent = `${toDisplayCategory(category)} (${counts[category]})`;
            button.addEventListener('click', () => {
                refs.quickTags.querySelectorAll('.tag-btn').forEach((btn) => btn.classList.remove('active'));
                button.classList.add('active');
                refs.categoryFilter.value = category;
                renderCards();
            });
            refs.quickTags.appendChild(button);
        });
}

function renderTimeline() {
    const grouped = {};

    state.all.forEach((item) => {
        if (!grouped[item.eventLabel]) {
            grouped[item.eventLabel] = {
                label: item.eventLabel,
                count: 0,
                timestamp: item.timestamp
            };
        }
        grouped[item.eventLabel].count += 1;
    });

    const sorted = Object.values(grouped).sort((a, b) => b.timestamp - a.timestamp);

    refs.eventTimeline.innerHTML = '';

    sorted.forEach((eventInfo) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.className = 'event-btn';
        button.innerHTML = `<span>${eventInfo.label}</span><span>${eventInfo.count}</span>`;
        button.addEventListener('click', () => {
            refs.eventFilter.value = eventInfo.label;
            refs.eventTimeline.querySelectorAll('.event-btn').forEach((item) => item.classList.remove('active'));
            button.classList.add('active');
            renderCards();
        });
        li.appendChild(button);
        refs.eventTimeline.appendChild(li);
    });
}

function getFilteredWriteups() {
    const search = refs.searchInput.value.trim().toLowerCase();
    const platform = refs.platformFilter.value;
    const eventLabel = refs.eventFilter.value;
    const category = refs.categoryFilter.value;
    const sort = refs.sortFilter.value;

    let list = [...state.all];

    if (platform !== 'all') list = list.filter((item) => item.platform === platform);
    if (eventLabel !== 'all') list = list.filter((item) => item.eventLabel === eventLabel);
    if (category !== 'all') list = list.filter((item) => item.category === category);
    if (search) {
        list = list.filter((item) => {
            const blob = `${item.title} ${item.eventLabel} ${item.categoryLabel} ${item.platform}`.toLowerCase();
            return blob.includes(search);
        });
    }

    if (sort === 'title') list.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === 'oldest') list.sort((a, b) => a.timestamp - b.timestamp);
    if (sort === 'recent') list.sort((a, b) => b.timestamp - a.timestamp);

    return list;
}

function renderCards() {
    const list = getFilteredWriteups();
    state.filtered = list;

    refs.resultMeta.textContent = `${list.length} writeup(s) shown from ${state.all.length} total.`;
    refs.writeupGrid.innerHTML = '';

    if (list.length === 0) {
        refs.writeupGrid.innerHTML = '<article class="empty-state">No writeups match the current filters.</article>';
        return;
    }

    list.forEach((item) => {
        const card = document.createElement('article');
        card.className = 'writeup-card';
        card.setAttribute('data-id', item.id);

        const categoryColor = CATEGORY_COLORS[item.category] || '#42d6ff';
        const badgeClass = item.platform === 'HTB' ? 'badge-htb' : 'badge-ctf';

        card.innerHTML = `
            <div class="card-top">
                <h3 class="card-title">${escapeHtml(item.title)}</h3>
                <span class="card-badge ${badgeClass}">${item.platform}</span>
            </div>
            <div class="card-meta">
                <p>${escapeHtml(item.eventLabel)}</p>
                <p>${escapeHtml(item.path.replace('../', ''))}</p>
            </div>
            <div class="card-footer">
                <span class="category-pill" style="border-color:${categoryColor}; color:${categoryColor};">${escapeHtml(item.categoryLabel)}</span>
                <span>Open writeup</span>
            </div>
        `;

        card.addEventListener('click', () => openWriteup(item.id));
        refs.writeupGrid.appendChild(card);
    });
}

function renderHtbFocus() {
    const htbList = state.all.filter((item) => item.platform === 'HTB').sort((a, b) => b.timestamp - a.timestamp);
    refs.htbFocusCards.innerHTML = '';

    htbList.forEach((item) => {
        const card = document.createElement('article');
        card.className = 'focus-card';
        card.innerHTML = `
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.eventLabel)} | ${escapeHtml(item.categoryLabel)}</p>
            <button class="btn btn-secondary">Read walkthrough</button>
        `;
        card.querySelector('button').addEventListener('click', () => openWriteup(item.id));
        refs.htbFocusCards.appendChild(card);
    });
}

async function openWriteup(writeupId) {
    const writeup = state.all.find((item) => item.id === writeupId);
    if (!writeup) return;

    state.active = writeup;
    refs.readerModal.classList.add('open');
    refs.readerModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    refs.readerKicker.textContent = `${writeup.platform} | ${writeup.categoryLabel}`;
    refs.readerTitle.textContent = writeup.title;
    refs.readerSubtitle.textContent = `${writeup.eventLabel} | ${writeup.path.replace('../', '')}`;
    refs.openRawLink.href = writeup.path;

    refs.readerContent.innerHTML = '<p class="loading-state">Loading markdown and screenshots...</p>';
    if (refs.tocList) refs.tocList.innerHTML = '';
    refs.imageGallery.innerHTML = '';
    refs.readerProgressBar.style.width = '0%';
    refs.readerMain.scrollTop = 0;
    refs.readerMain.focus({ preventScroll: true });

    try {
        const response = await fetch(writeup.path);
        if (!response.ok) throw new Error(`Request failed with ${response.status}`);
        const markdown = await response.text();
        const polishedMarkdown = polishNarrativeMarkdown(markdown);
        const html = markdownToHtml(polishedMarkdown, writeup.path);

        refs.readerContent.innerHTML = html;
        markStepHeadings();
        buildToc();
        buildGallery();
        bindMarkdownImages();
        updateReaderProgress();
    } catch (error) {
        refs.readerContent.innerHTML = `
            <article class="error-state">
                <p>Could not load this markdown file in-browser.</p>
                <p>Run the site using a local web server (for example VS Code Live Server), then try again.</p>
                <p>Error: ${escapeHtml(error.message)}</p>
            </article>
        `;
    }
}

function closeReader() {
    if (!refs.readerModal.classList.contains('open')) return;
    refs.readerModal.classList.remove('open');
    refs.readerModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function handleReaderShellWheel(event) {
    if (!refs.readerModal.classList.contains('open')) return;
    if (!refs.readerMain) return;

    const nativeScrollable = event.target.closest('.reader-main, .reader-toc');
    if (nativeScrollable) return;

    const nextTop = refs.readerMain.scrollTop + event.deltaY;
    const maxTop = Math.max(0, refs.readerMain.scrollHeight - refs.readerMain.clientHeight);
    refs.readerMain.scrollTop = Math.min(maxTop, Math.max(0, nextTop));
    event.preventDefault();
}

function markStepHeadings() {
    refs.readerContent.querySelectorAll('h2, h3, h4').forEach((heading) => {
        if (/^(step|task)\s*\d+/i.test(heading.textContent.trim())) {
            heading.classList.add('step-heading');
        }
    });
}

function buildToc() {
    if (!refs.tocList || !refs.readerToc) return;

    const headings = refs.readerContent.querySelectorAll('h2, h3');
    refs.tocList.innerHTML = '';

    if (!headings.length) {
        if (refs.readerToc) refs.readerToc.classList.add('hidden');
        if (refs.readerContentWrap) refs.readerContentWrap.classList.add('toc-hidden');
        return;
    }

    if (refs.readerToc) refs.readerToc.classList.remove('hidden');
    if (refs.readerContentWrap) refs.readerContentWrap.classList.remove('toc-hidden');

    headings.forEach((heading) => {
        if (!heading.id) heading.id = slugify(heading.textContent);
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        link.addEventListener('click', (event) => {
            event.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        li.appendChild(link);
        refs.tocList.appendChild(li);
    });
}

function buildGallery() {
    const images = [...refs.readerContent.querySelectorAll('img')].filter((img) => img.getAttribute('src'));
    refs.imageGallery.innerHTML = '';

    if (!images.length) return;

    images.forEach((image, index) => {
        const button = document.createElement('button');
        button.className = 'gallery-item';
        button.setAttribute('type', 'button');
        button.setAttribute('aria-label', `Open screenshot ${index + 1}`);
        button.innerHTML = `<img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || `Screenshot ${index + 1}`)}">`;
        button.addEventListener('click', () => openLightbox(image.src, image.alt));
        refs.imageGallery.appendChild(button);
    });
}

function bindMarkdownImages() {
    refs.readerContent.querySelectorAll('img').forEach((img) => {
        img.addEventListener('click', () => openLightbox(img.src, img.alt));
        img.addEventListener('error', () => {
            const wrapper = img.closest('.md-image');
            if (wrapper) {
                wrapper.classList.add('broken');
                const pathHint = img.getAttribute('src') || 'unknown path';
                if (!wrapper.querySelector('.broken-hint')) {
                    const hint = document.createElement('figcaption');
                    hint.className = 'broken-hint';
                    hint.textContent = `Image not found: ${pathHint}`;
                    wrapper.appendChild(hint);
                }
            }
        });
    });
}

function openLightbox(src, alt) {
    refs.lightboxImage.src = src;
    refs.lightboxImage.alt = alt || 'Screenshot preview';
    refs.imageLightbox.classList.add('open');
    refs.imageLightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
    refs.imageLightbox.classList.remove('open');
    refs.imageLightbox.setAttribute('aria-hidden', 'true');
}

function updateReaderProgress() {
    const el = refs.readerMain;
    const total = el.scrollHeight - el.clientHeight;
    const progress = total <= 0 ? 0 : (el.scrollTop / total) * 100;
    refs.readerProgressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

function markdownToHtml(markdown, markdownPath) {
    const baseUrl = new URL(markdownPath, window.location.href);
    const codeBlocks = [];

    let input = markdown.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

    input = input.replace(/```([\w-]*)\n([\s\S]*?)```/g, (_, language, code) => {
        const token = `@@CODEBLOCK_${codeBlocks.length}@@`;
        codeBlocks.push({ language: language || '', code });
        return token;
    });

    const lines = input.split('\n');
    const html = [];
    let activeList = null;

    for (const line of lines) {
        const trimmed = line.trim();

        if (!trimmed) {
            closeList();
            continue;
        }

        if (/^@@CODEBLOCK_\d+@@$/.test(trimmed)) {
            closeList();
            html.push(trimmed);
            continue;
        }

        const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
        if (headingMatch) {
            closeList();
            const level = headingMatch[1].length;
            const text = headingMatch[2].trim();
            const id = slugify(text);
            html.push(`<h${level} id="${id}">${parseInline(text, baseUrl)}</h${level}>`);
            continue;
        }

        const taskMatch = trimmed.match(/^task\s*(\d+)\s*:\s*(.+)$/i);
        if (taskMatch) {
            closeList();
            const text = `Task ${taskMatch[1]}: ${taskMatch[2].trim()}`;
            const id = slugify(text);
            html.push(`<h3 id="${id}" class="step-heading">${parseInline(text, baseUrl)}</h3>`);
            continue;
        }

        const metaMatch = trimmed.match(/^(answer|answers|flag)\s*[:=]\s*(.+)$/i);
        if (metaMatch) {
            closeList();
            const label = metaMatch[1].toUpperCase();
            const value = parseInline(metaMatch[2].trim(), baseUrl);
            html.push(`<p class="writeup-meta-line"><span class="meta-label">${label}</span><span class="meta-value">${value}</span></p>`);
            continue;
        }

        if (/^---+$/.test(trimmed)) {
            closeList();
            html.push('<hr>');
            continue;
        }

        const ulMatch = trimmed.match(/^[-*]\s+(.+)$/);
        if (ulMatch) {
            openList('ul');
            html.push(`<li>${parseInline(ulMatch[1], baseUrl)}</li>`);
            continue;
        }

        const olMatch = trimmed.match(/^\d+\.\s+(.+)$/);
        if (olMatch) {
            openList('ol');
            html.push(`<li>${parseInline(olMatch[1], baseUrl)}</li>`);
            continue;
        }

        const quoteMatch = trimmed.match(/^>\s*(.+)$/);
        if (quoteMatch) {
            closeList();
            html.push(`<blockquote>${parseInline(quoteMatch[1], baseUrl)}</blockquote>`);
            continue;
        }

        if (/^!\[[^\]]*\]\([^)]+\)$/.test(trimmed)) {
            closeList();
            html.push(parseInline(trimmed, baseUrl));
            continue;
        }

        closeList();
        html.push(`<p>${parseInline(trimmed, baseUrl)}</p>`);
    }

    closeList();

    let finalHtml = html.join('');

    finalHtml = finalHtml.replace(/@@CODEBLOCK_(\d+)@@/g, (_, indexText) => {
        const index = Number(indexText);
        const block = codeBlocks[index];
        if (!block) return '';
        const lang = block.language ? ` class="language-${escapeHtml(block.language)}"` : '';
        return `<pre><code${lang}>${escapeHtml(block.code.trimEnd())}</code></pre>`;
    });

    return finalHtml;

    function openList(type) {
        if (activeList === type) return;
        closeList();
        activeList = type;
        html.push(`<${type}>`);
    }

    function closeList() {
        if (!activeList) return;
        html.push(`</${activeList}>`);
        activeList = null;
    }
}

function parseInline(text, baseUrl) {
    const { textWithTokens, tokens } = tokenizeInlineElements(text);
    let working = textWithTokens;

    working = escapeHtml(working)
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code>$1</code>');

    working = working.replace(/@@TOKEN_(\d+)@@/g, (_, tokenIndex) => {
        const token = tokens[Number(tokenIndex)];
        if (!token) return '';

        if (token.type === 'image') {
            const imageUrl = resolveMarkdownUrl(baseUrl, token.src);
            const alt = escapeHtml(stripMarkdown((token.alt || '').trim()) || 'Screenshot');
            return `
                <figure class="md-image">
                    <img src="${imageUrl}" alt="${alt}" loading="lazy">
                </figure>
            `;
        }

        const url = resolveMarkdownUrl(baseUrl, token.href);
        const label = escapeHtml(stripMarkdown(token.label || token.href));
        const external = /^(https?:)?\/\//i.test(token.href.trim()) ? ' target="_blank" rel="noopener"' : '';
        return `<a href="${url}"${external}>${label}</a>`;
    });

    return working;
}

function tokenizeInlineElements(input) {
    const tokens = [];
    let output = '';
    let i = 0;

    while (i < input.length) {
        const isImage = input[i] === '!' && input[i + 1] === '[';
        const startsLink = input[i] === '[';

        if (!isImage && !startsLink) {
            output += input[i];
            i += 1;
            continue;
        }

        const labelStart = isImage ? i + 1 : i;
        const labelEnd = findBalancedEnd(input, labelStart, '[', ']');
        if (labelEnd === -1) {
            output += input[i];
            i += 1;
            continue;
        }

        if (labelEnd + 1 >= input.length || input[labelEnd + 1] !== '(') {
            output += input[i];
            i += 1;
            continue;
        }

        const urlStart = labelEnd + 1;
        const urlEnd = findBalancedEnd(input, urlStart, '(', ')');
        if (urlEnd === -1) {
            output += input[i];
            i += 1;
            continue;
        }

        const label = input.slice(labelStart + 1, labelEnd).trim();
        const rawTarget = input.slice(urlStart + 1, urlEnd).trim();
        const target = rawTarget.replace(/^<|>$/g, '').trim();

        if (!target) {
            output += input[i];
            i += 1;
            continue;
        }

        const key = `@@TOKEN_${tokens.length}@@`;
        tokens.push(
            isImage
                ? { type: 'image', alt: label, src: target }
                : { type: 'link', label, href: target }
        );

        output += key;
        i = urlEnd + 1;
    }

    return { textWithTokens: output, tokens };
}

function findBalancedEnd(text, start, openChar, closeChar) {
    if (text[start] !== openChar) return -1;
    let depth = 0;

    for (let i = start; i < text.length; i += 1) {
        const ch = text[i];
        const prev = text[i - 1];

        if (ch === openChar && prev !== '\\') {
            depth += 1;
            continue;
        }

        if (ch === closeChar && prev !== '\\') {
            depth -= 1;
            if (depth === 0) return i;
        }
    }

    return -1;
}

function stripMarkdown(text) {
    return text
        .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/[*_`~]/g, '')
        .trim();
}

function resolveMarkdownUrl(baseUrl, rawPath) {
    const cleaned = (rawPath || '').trim().replace(/^<|>$/g, '');

    if (/^(https?:|mailto:|tel:)/i.test(cleaned)) {
        return cleaned;
    }

    try {
        const url = new URL(cleaned, baseUrl);
        return url.href;
    } catch {
        return cleaned;
    }
}

function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function polishNarrativeMarkdown(markdown) {
    const normalized = markdown
        .replace(/\r\n/g, '\n')
        .replace(/\r/g, '\n')
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/[\u201c\u201d]/g, '"')
        .replace(/\u2013/g, '-')
        .replace(/\u2014/g, ' - ')
        .replace(/\u2026/g, '...')
        .replace(/\u00a0/g, ' ');

    const segments = normalized.split(/(```[\s\S]*?```)/g);

    return segments
        .map((segment) => {
            if (segment.startsWith('```')) return segment;
            return segment
                .split('\n')
                .map((line) => polishLine(line))
                .join('\n')
                .replace(/\n{3,}/g, '\n\n');
        })
        .join('');
}

function polishLine(line) {
    if (!line.trim()) return line;
    if (/^\s*(!?\[|#|>|`|-{3,}|\d+\.)/.test(line)) {
        return line.replace(/[ \t]+$/g, '');
    }

    const hasUrl = /(https?:\/\/|www\.)/i.test(line);
    let cleaned = line
        .replace(/\s{2,}/g, ' ')
        .replace(/\bi\b/g, 'I')
        .replace(/\bim\b/gi, "I'm")
        .replace(/\bdont\b/gi, "don't")
        .replace(/\bcant\b/gi, "can't")
        .replace(/\bdoesnt\b/gi, "doesn't")
        .replace(/\bdidnt\b/gi, "didn't")
        .replace(/\bive\b/gi, "I've")
        .replace(/\bthats\b/gi, "that's")
        .replace(/\btheres\b/gi, "there's")
        .replace(/\bteh\b/gi, 'the')
        .replace(/\bprivilage\b/gi, 'privilege')
        .replace(/\bexcute\b/gi, 'execute')
        .replace(/\bchatgpt\b/g, 'ChatGPT')
        .replace(/\bgithub\b/g, 'GitHub')
        .replace(/\bjavascript\b/g, 'JavaScript')
        .replace(/\bburpsuite\b/gi, 'Burp Suite')
        .replace(/\bghidra\b/gi, 'Ghidra')
        .replace(/\bhttps:\/\//gi, 'https://')
        .replace(/\bget\/api\//gi, 'get /api/')
        .replace(/\bto\/(\d)/gi, 'to /$1')
        .replace(/\s+$/g, '');

    if (!hasUrl) {
        cleaned = cleaned
            .replace(/\s+([,.;!?])/g, '$1')
            .replace(/([,.;!?])(?=[A-Za-z])/g, '$1 ');
    }

    if (/^[a-z]/.test(cleaned)) {
        cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
    }

    return cleaned;
}

function applyBackgroundParallax(scrollY) {
    const root = document.documentElement;
    if (state.motionLite) {
        root.style.setProperty('--parallax-shift', '0px');
        root.style.setProperty('--parallax-video', '0px');
        root.style.setProperty('--parallax-orb-a', '0px');
        root.style.setProperty('--parallax-orb-b', '0px');
        return;
    }
    const y = Number(scrollY) || 0;
    root.style.setProperty('--parallax-shift', `${Math.max(-90, y * -0.08)}px`);
    root.style.setProperty('--parallax-video', `${Math.max(-160, y * -0.12)}px`);
    root.style.setProperty('--parallax-orb-a', `${Math.max(-120, y * -0.06)}px`);
    root.style.setProperty('--parallax-orb-b', `${Math.max(-200, y * -0.14)}px`);
}

function initCursorEffects() {
    if (state.motionLite || window.matchMedia('(pointer: coarse), (hover: none)').matches) return;

    const ring = document.getElementById('cursorRing');
    const dot = document.getElementById('cursorDot');
    if (!ring || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;

    const animate = () => {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
        rafId = requestAnimationFrame(animate);
    };

    document.body.classList.add('cursor-active');
    rafId = requestAnimationFrame(animate);

    window.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    document.addEventListener('mouseover', (event) => {
        if (event.target.closest('a, button, input, select, textarea, .writeup-card, .gallery-item, .event-btn')) {
            document.body.classList.add('cursor-hover');
        }
    });

    document.addEventListener('mouseout', (event) => {
        if (event.target.closest('a, button, input, select, textarea, .writeup-card, .gallery-item, .event-btn')) {
            document.body.classList.remove('cursor-hover');
        }
    });

    window.addEventListener('mousedown', () => document.body.classList.add('cursor-down'));
    window.addEventListener('mouseup', () => document.body.classList.remove('cursor-down'));
    window.addEventListener('blur', () => {
        document.body.classList.remove('cursor-hover', 'cursor-down');
    });
}

function isMotionLiteDevice() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const touchCapable = (navigator.maxTouchPoints || 0) > 0 || ('ontouchstart' in window);
    const compactViewport = window.innerWidth <= 1100;
    const coarsePointer = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    return reducedMotion || coarsePointer || (touchCapable && compactViewport);
}

document.addEventListener('DOMContentLoaded', init);

