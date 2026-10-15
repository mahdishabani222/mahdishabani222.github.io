(function () {
  'use strict';

  const STORAGE_KEY = 'site-language';
  const DEFAULT_LANGUAGE = 'en';

  const UI = {
    en: {
      languageButton: 'FA',
      languageLabel: 'Switch to Persian',
      themeLabel: 'Toggle dark mode',
      home: 'Back home',
      ongoingProjects: 'Ongoing Projects',
      projectsIntro: "A working list of what I'm currently building and researching.",
      research: 'Research & Articles',
      researchIntro: 'Published articles and ongoing research work.',
      viewProjects: 'View all projects',
      viewResearch: 'View all research & articles',
      connect: "Let's connect",
      about: 'About',
      skills: 'Skills & Tools',
      interests: 'Research Interests',
      education: 'Education & Experience',
      contact: 'Get in Touch',
      contactIntro: 'Fill this out and it will open in your email app, ready to send.',
      name: 'Name',
      email: 'Your email',
      message: 'Message',
      send: 'Send message',
      emailNote: 'This opens your default email app.',
      copyEmail: 'Copy it here',
      copied: 'Copied ✓',
      downloadCv: 'Download CV',
      allRights: 'All rights reserved.',
      adminTitle: 'Site Content Manager',
      adminIntro: 'Edit your website content without coding. Fill in the forms and download content.json when you are done.',
      adminLoaded: 'Current content loaded from content.json. Make your changes and download the file when finished.',
      adminMissing: 'content.json was not found. Load an existing file or fill in the form from scratch.',
      adminUploaded: 'File loaded successfully.',
      profile: 'Profile',
      professional: 'Professional identity and career direction',
      interestsCard: 'Research interests',
      skillsCard: 'Skills & Tools',
      projectsCard: 'Ongoing projects',
      researchCard: 'Research & Articles',
      timelineCard: 'Education and experience',
      downloadJson: 'Download content.json',
      uploadJson: 'Load existing content.json',
      add: 'Add',
      addProject: '+ Add project',
      addResearch: '+ Add research',
      addTimeline: '+ Add item',
      addCategory: '+ Add category',
      now: 'Now',
      next: 'Next',
      longTerm: 'Long-term'
    },
    fa: {
      languageButton: 'EN',
      languageLabel: 'تغییر زبان به انگلیسی',
      themeLabel: 'تغییر حالت روشن و تاریک',
      home: 'بازگشت به خانه',
      ongoingProjects: 'پروژه‌های در حال انجام',
      projectsIntro: 'فهرستی از پروژه‌هایی که در حال ساخت و پژوهش روی آن‌ها هستم.',
      research: 'پژوهش‌ها و مقالات',
      researchIntro: 'مقالات منتشرشده و پژوهش‌های در حال انجام.',
      viewProjects: 'مشاهدهٔ همهٔ پروژه‌ها',
      viewResearch: 'مشاهدهٔ همهٔ پژوهش‌ها و مقالات',
      connect: 'ارتباط با من',
      about: 'دربارهٔ من',
      skills: 'مهارت‌ها و ابزارها',
      interests: 'علایق پژوهشی',
      education: 'تحصیلات و تجربه',
      contact: 'ارتباط با من',
      contactIntro: 'فرم را پر کنید تا برنامهٔ ایمیل شما با پیام آماده باز شود.',
      name: 'نام',
      email: 'ایمیل شما',
      message: 'پیام',
      send: 'ارسال پیام',
      emailNote: 'این دکمه برنامهٔ ایمیل پیش‌فرض شما را باز می‌کند.',
      copyEmail: 'اینجا کپی کنید',
      copied: 'کپی شد ✓',
      downloadCv: 'دانلود رزومه',
      allRights: 'تمامی حقوق محفوظ است.',
      adminTitle: 'مدیریت محتوای سایت',
      adminIntro: 'محتوای سایت را بدون کدنویسی ویرایش کنید. فرم‌ها را پر کنید و در پایان فایل content.json را دانلود کنید.',
      adminLoaded: 'محتوای فعلی از content.json بارگذاری شد. تغییرات را اعمال کنید و در پایان فایل را دانلود کنید.',
      adminMissing: 'فایل content.json پیدا نشد. فایل موجود را بارگذاری کنید یا فرم را از ابتدا پر کنید.',
      adminUploaded: 'فایل با موفقیت بارگذاری شد.',
      profile: 'پروفایل',
      professional: 'هویت حرفه‌ای و مسیر شغلی',
      interestsCard: 'علایق پژوهشی',
      skillsCard: 'مهارت‌ها و ابزارها',
      projectsCard: 'پروژه‌های در حال انجام',
      researchCard: 'پژوهش‌ها و مقالات',
      timelineCard: 'تحصیلات و تجربه',
      downloadJson: 'دانلود content.json',
      uploadJson: 'بارگذاری فایل content.json موجود',
      add: 'افزودن',
      addProject: '+ افزودن پروژه',
      addResearch: '+ افزودن پژوهش',
      addTimeline: '+ افزودن مورد',
      addCategory: '+ افزودن دسته‌بندی جدید',
      now: 'اکنون',
      next: 'بعدی',
      longTerm: 'بلندمدت'
    }
  };

  const ADMIN_EN_TEXT = {
    'ویرایش محتوای سایت بدون نیاز به کدنویسی. فرم‌های زیر رو پر کن و در پایین «دانلود content.json» رو بزن، بعد فایل دانلودشده رو جای فایل قبلی (کنار index.html) بذار.': 'Edit your website content without coding. Fill in the forms and download content.json when you are done.',
    'اطلاعات اصلی که در هدر و باکس اول نمایش داده می‌شود.': 'The main information shown in the header and profile card.',
    'هر مهارت را تایپ کن و اینتر بزن یا روی «افزودن» کلیک کن.': 'Type a skill and press Enter or click Add.',
    'هر پروژه یک عنوان، وضعیت و توضیح کوتاه دارد.': 'Each project has a title, status, and short description.',
    'اگر عنوان یا چکیده فارسی است، تیک «متن فارسی» را بزن تا با فونت و راست‌چین درست نمایش داده شود.': 'Check “Persian text” when a title or abstract is in Persian.',
    'هر مورد شامل بازه زمانی، عنوان، مؤسسه/شرکت، و یک توضیح تمرکز (اختیاری) است.': 'Each item includes a period, title, organization, and optional focus.',
    'نام و نام خانوادگی': 'Full name',
    'عنوان کوتاه بالای اسم (Eyebrow)': 'Short line above the name (eyebrow)',
    'معرفی کوتاه (Tagline)': 'Short introduction (tagline)',
    'بیوگرافی کوتاه (بخش About)': 'Short biography (About section)',
    'لینک LinkedIn': 'LinkedIn link',
    'لینک دانلود رزومه (اختیاری)': 'CV download link (optional)',
    'مهارت‌ها رو در دسته‌های مختلف سازمان‌دهی کن (مثلاً «یادگیری ماشین»، «بینایی کامپیوتر»). هر دسته یک عنوان و لیستی از مهارت‌ها داره.': 'Organize skills into categories. Each category has a title and a list of skills.',
    'لیست کوتاهی از زمینه‌هایی که بهشون علاقه‌مندی (جدا از پژوهش‌های منتشرشده).': 'A short list of your interests, separate from published research.',
    'فیلدهای اختیاری (زیرعنوان، حوزه، فناوری‌ها، تأثیر، دیتاست) رو خالی بذار اگه لازم نداری.': 'Leave optional fields empty when they are not needed.',
    'بازه زمانی': 'Period',
    'عنوان (مدرک یا سمت)': 'Title (degree or position)',
    'مؤسسه / شرکت': 'Institution / company',
    'مؤسسه / شرکت و توضیح کوتاه': 'Institution / company and short description',
    'تمرکز (اختیاری)': 'Focus (optional)',
    'عنوان پروژه': 'Project title',
    'زیرعنوان (اختیاری)': 'Subtitle (optional)',
    'حوزه (اختیاری)': 'Domain (optional)',
    'توضیح کوتاه': 'Short description',
    'فناوری‌ها (با کاما جدا کن)': 'Technologies (comma-separated)',
    'تمرکزها/Focus (با کاما جدا کن، اختیاری)': 'Focus areas (comma-separated, optional)',
    'تأثیر/Impact (اختیاری)': 'Impact (optional)',
    'دیتاست (اختیاری)': 'Dataset (optional)',
    'عنوان مقاله': 'Article title',
    'چکیده کوتاه': 'Short abstract',
    'حوزه (اختیاری)': 'Domain (optional)',
    'زمینه‌های پژوهشی (با کاما جدا کن، اختیاری)': 'Research areas (comma-separated, optional)',
    'متن فارسی است': 'This is Persian text',
    'مثلاً PyTorch': 'e.g. PyTorch',
    'مثلاً Spatial Machine Learning': 'e.g. Spatial Machine Learning',
    'مثلاً Explainable': 'e.g. Explainable',
    'مثلاً 2022 — 2024': 'e.g. 2022 — 2024',
    'مثلاً In progress': 'e.g. In progress'
  };

  function getLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === 'fa' || saved === 'en' ? saved : DEFAULT_LANGUAGE;
    } catch (_) {
      return DEFAULT_LANGUAGE;
    }
  }

  function setLanguage(language) {
    try { localStorage.setItem(STORAGE_KEY, language); } catch (_) {}
  }

  function ui(key) {
    return (UI[getLanguage()] || UI.en)[key] || UI.en[key] || key;
  }

  function localizeContent(data) {
    const language = getLanguage();
    if (language !== 'fa' || !data || !data.translations || !data.translations.fa) return data;
    const fa = data.translations.fa;
    const mergeItems = (base, translated) => (base || []).map((item, index) => ({
      ...item,
      ...((translated || [])[index] || {})
    }));
    return {
      ...data,
      profile: { ...(data.profile || {}), ...(fa.profile || {}) },
      skills: fa.skills || data.skills,
      projects: mergeItems(data.projects, fa.projects),
      research: mergeItems(data.research, fa.research),
      researchInterests: fa.researchInterests || data.researchInterests,
      careerDirection: { ...(data.careerDirection || {}), ...(fa.careerDirection || {}) },
      professionalIdentity: { ...(data.professionalIdentity || {}), ...(fa.professionalIdentity || {}) },
      timeline: mergeItems(data.timeline, fa.timeline)
    };
  }

  function setText(selector, value) {
    const element = document.querySelector(selector);
    if (!element || value == null) return;
    const directText = Array.from(element.childNodes)
      .filter(node => node.nodeType === Node.TEXT_NODE)
      .reverse()
      .find(node => node.nodeValue.trim());
    if (directText) directText.textContent = value;
    else element.textContent = value;
  }

  function setAttr(selector, attr, value) {
    const element = document.querySelector(selector);
    if (element && value != null) element.setAttribute(attr, value);
  }

  function injectRtlStyles() {
    if (document.getElementById('bilingual-layout-styles')) return;
    const style = document.createElement('style');
    style.id = 'bilingual-layout-styles';
    style.textContent = `
      .language-toggle{font-size:.72rem;font-weight:600;letter-spacing:.02em}
      .header-actions{display:flex;align-items:center;gap:8px}
      html[dir="rtl"] body{text-align:right}
      html[dir="rtl"] .hero,html[dir="rtl"] .section-head,html[dir="rtl"] .profile-box{text-align:center}
      html[dir="rtl"] .page-header,html[dir="rtl"] .entry{text-align:right}
      html[dir="rtl"] .item-list a{flex-direction:row-reverse}
      html[dir="rtl"] .item-list a .arrow{transform:scaleX(-1)}
      html[dir="rtl"] .item-list a:hover .arrow{transform:translateX(-3px) scaleX(-1)}
      html[dir="rtl"] .timeline{padding-left:0;padding-right:28px;border-left:none;border-right:1px solid var(--hairline)}
      html[dir="rtl"] .timeline-item::before{left:auto;right:-33px}
      html[dir="rtl"] .impact-line{border-left:none;border-right:2px solid var(--gold);padding-left:0;padding-right:15px}
      html[dir="rtl"] .contact-box{text-align:right}
      html[dir="rtl"] .form-submit{flex-direction:row-reverse}
      html[dir="rtl"] .back-link svg{transform:scaleX(-1)}
      html[dir="rtl"] .admin-header,.admin-header[dir="rtl"]{text-align:right}
      html[dir="rtl"] .admin-header .language-toggle{left:0;right:auto}
      .admin-header{position:relative}
      .admin-header .language-toggle{position:absolute;top:0;right:0}
    `;
    document.head.appendChild(style);
  }

  function addLanguageToggle() {
    const host = document.querySelector('.site-header') || document.querySelector('.admin-header');
    if (!host || document.getElementById('language-toggle')) return;
    const button = document.createElement('button');
    button.id = 'language-toggle';
    button.className = 'theme-toggle language-toggle';
    button.type = 'button';
    button.textContent = ui('languageButton');
    button.setAttribute('aria-label', ui('languageLabel'));
    button.title = ui('languageLabel');
    if (host.classList.contains('site-header')) {
      const actions = document.createElement('div');
      actions.className = 'header-actions';
      const theme = host.querySelector('#theme-toggle');
      if (theme) { host.removeChild(theme); actions.appendChild(theme); }
      actions.appendChild(button);
      host.appendChild(actions);
    } else {
      host.appendChild(button);
    }
    button.addEventListener('click', () => {
      setLanguage(getLanguage() === 'fa' ? 'en' : 'fa');
      window.location.reload();
    });
  }

  function translatePublicUi() {
    setAttr('#theme-toggle', 'aria-label', ui('themeLabel'));
    setText('.profile-box .role', ui('connect'));
    setText('.mark', getLanguage() === 'fa' ? 'م. شعبانی' : 'M. Shabani');
    setText('.more-link[href="projects.html"]', ui('viewProjects'));
    setText('.more-link[href="research.html"]', ui('viewResearch'));
    const sectionHeads = Array.from(document.querySelectorAll('.section-head h2'));
    if (sectionHeads.length >= 5) {
      sectionHeads[0].textContent = ui('about');
      sectionHeads[1].textContent = ui('skills');
      sectionHeads[2].textContent = ui('interests');
      sectionHeads[3].textContent = ui('education');
      sectionHeads[4].textContent = ui('contact');
    } else if (sectionHeads.length === 3) {
      sectionHeads[0].textContent = ui('skills');
      sectionHeads[1].textContent = ui('education');
      sectionHeads[2].textContent = ui('contact');
    } else if (!document.querySelector('.page-header') && sectionHeads[0]) {
      sectionHeads[0].textContent = ui('contact');
    }
    const contactNotes = document.querySelectorAll('.section-head p');
    if (contactNotes.length) contactNotes[contactNotes.length - 1].textContent = ui('contactIntro');
    setText('label[for="cf-name"]', ui('name'));
    setText('label[for="cf-email"]', ui('email'));
    setText('label[for="cf-message"]', ui('message'));
    setText('.form-submit', ui('send'));
    const careerLabels = document.querySelectorAll('.career-strip .label');
    if (careerLabels[0]) careerLabels[0].textContent = ui('now');
    if (careerLabels[1]) careerLabels[1].textContent = ui('next');
    if (careerLabels[2]) careerLabels[2].textContent = ui('longTerm');
    const note = document.querySelector('.form-note');
    if (note) {
      const fallback = note.querySelector('#copy-email-fallback');
      note.childNodes[0].textContent = ui('emailNote') + ' ';
      if (fallback) fallback.textContent = ui('copyEmail');
    }
    const footer = document.querySelector('.site-footer');
    if (footer) footer.innerHTML = `© <span id="year"></span> <span id="footer-name">${footer.querySelector('#footer-name')?.textContent || (getLanguage() === 'fa' ? 'مهدی شعبانی' : 'Mahdi Shabani')}</span>. ${ui('allRights')}`;
    setText('.page-header .back-link', ui('home'));
    const isInnerPage = !!document.querySelector('.page-header');
    if (path.endsWith('projects.html') && isInnerPage) {
      setText('.page-header h1', ui('ongoingProjects'));
      setText('.page-header p', ui('projectsIntro'));
      setText('.box h2', ui('ongoingProjects'));
    }
    if (path.endsWith('research.html') && isInnerPage) {
      setText('.page-header h1', ui('research'));
      setText('.page-header p', ui('researchIntro'));
      const boxHead = document.querySelector('.box h2');
      if (boxHead) boxHead.textContent = ui('research');
    }
    if (!isInnerPage) {
      const homeHeads = document.querySelectorAll('.box h2');
      if (homeHeads[0]) homeHeads[0].textContent = ui('ongoingProjects');
      if (homeHeads[1]) homeHeads[1].textContent = ui('research');
    }
  }

  function translateAdminUi() {
    setText('.admin-header h1', ui('adminTitle'));
    setText('.admin-header p', ui('adminIntro'));
    const cards = Array.from(document.querySelectorAll('.card h2'));
    const labels = [ui('profile'), ui('professional'), ui('interestsCard'), ui('skillsCard'), ui('projectsCard'), ui('researchCard'), ui('timelineCard')];
    cards.forEach((card, index) => { if (labels[index]) card.textContent = labels[index]; });
    setText('#download-btn', ui('downloadJson'));
    setText('.file-label', ui('uploadJson'));
    document.querySelectorAll('.add-btn').forEach(button => {
      if (button.id === 'project-add-btn') button.textContent = ui('addProject');
      else if (button.id === 'research-add-btn') button.textContent = ui('addResearch');
      else if (button.id === 'timeline-add-btn') button.textContent = ui('addTimeline');
      else if (button.id === 'category-add-btn') button.textContent = ui('addCategory');
      else if (!button.textContent.trim().startsWith('+')) button.textContent = ui('add');
    });
    const status = document.getElementById('status-bar');
    if (status) {
      const observer = new MutationObserver(() => {
        const value = status.textContent || '';
        if (value.includes('محتوای فعلی')) status.textContent = ui('adminLoaded');
        else if (value.includes('فایل content.json پیدا نشد')) status.textContent = ui('adminMissing');
        else if (value.includes('فایل با موفقیت')) status.textContent = ui('adminUploaded');
      });
      observer.observe(status, { childList: true, characterData: true, subtree: true });
    }
    translateAdminTextNodes();
    const adminRoot = document.querySelector('.wrap');
    if (adminRoot && !adminRoot.__bilingualObserver) {
      const observer = new MutationObserver(() => translateAdminTextNodes());
      observer.observe(adminRoot, { childList: true, characterData: true, subtree: true });
      adminRoot.__bilingualObserver = observer;
    }
  }

  function translateAdminTextNodes() {
    if (getLanguage() !== 'en') return;
    const root = document.querySelector('.wrap');
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) nodes.push(node);
    nodes.forEach(textNode => {
      const raw = textNode.nodeValue || '';
      const trimmed = raw.trim();
      if (!trimmed || !ADMIN_EN_TEXT[trimmed]) return;
      const leading = raw.match(/^\s*/)?.[0] || '';
      const trailing = raw.match(/\s*$/)?.[0] || '';
      textNode.nodeValue = leading + ADMIN_EN_TEXT[trimmed] + trailing;
    });
  }

  function updateDocumentMeta() {
    const language = getLanguage();
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
    const path = window.location.pathname.toLowerCase();
    if (document.querySelector('.admin-header')) document.title = language === 'fa' ? 'مدیریت محتوای سایت — مهدی شعبانی' : 'Site Content Manager — Mahdi Shabani';
    else if (path.endsWith('projects.html')) document.title = language === 'fa' ? 'پروژه‌ها — مهدی شعبانی' : 'Machine Learning Projects — Mahdi Shabani';
    else if (path.endsWith('research.html')) document.title = language === 'fa' ? 'پژوهش‌ها — مهدی شعبانی' : 'Research & Publications — Mahdi Shabani';
    else document.title = language === 'fa' ? 'مهدی شعبانی — یادگیری ماشین و علم دادهٔ مکانی' : 'Mahdi Shabani — Machine Learning & Spatial Data Science';
    injectRtlStyles();
    addLanguageToggle();
    if (document.querySelector('.admin-header')) translateAdminUi();
    else translatePublicUi();
  }

  function watchDynamicPublicUi() {
    const careerStrip = document.getElementById('career-strip');
    if (!careerStrip) return;
    let translating = false;
    const observer = new MutationObserver(() => {
      if (translating || getLanguage() !== 'fa') return;
      const labels = Array.from(careerStrip.querySelectorAll('.label'));
      if (!labels.some(label => /^(Now|Next|Long-term)$/.test(label.textContent.trim()))) return;
      translating = true;
      translatePublicUi();
      translating = false;
    });
    observer.observe(careerStrip, { childList: true, subtree: true, characterData: true });
  }

  window.SiteI18n = { getLanguage, setLanguage, ui, localizeContent, updateDocumentMeta };
  updateDocumentMeta();
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(updateDocumentMeta, 0);
    watchDynamicPublicUi();
  });
})();
