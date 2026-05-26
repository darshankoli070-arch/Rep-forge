// ═══════════════════════════════════════════
// DATA & CONSTANTS
// ═══════════════════════════════════════════
const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const MUSCLES = ['Shoulder','Bicep','Tricep','Forearm','Chest','Back','Legs','Core'];
const MUSCLE_EMOJIS = { Shoulder:'🏋️', Bicep:'💪', Tricep:'🦾', Forearm:'🤜', Chest:'🫀', Back:'🦅', Legs:'🦵', Core:'⚡' };

const EXERCISES = {
  Bicep: [
    { name: 'Barbell Curl', grip: 'Supinated grip (palms up), elbows pinned to sides', emoji: '💪', visual: '🏋️‍♂️' },
    { name: 'Dumbbell Curl', grip: 'Alternate arms, supinated grip, controlled tempo', emoji: '💪', visual: '🤸' },
    { name: 'Hammer Curl', grip: 'Neutral grip (thumbs up), elbows stationary', emoji: '🔨', visual: '🤜' },
    { name: 'Concentration Curl', grip: 'Seated, elbow on inner thigh, full range of motion', emoji: '🎯', visual: '🧘' },
    { name: 'Cable Curl', grip: 'Underhand grip, constant tension throughout', emoji: '⚡', visual: '🔌' },
    { name: 'Preacher Curl', grip: 'Over the pad, supinated, no swinging', emoji: '📐', visual: '🪑' },
  ],
  Tricep: [
    { name: 'Tricep Pushdown', grip: 'Overhand grip, elbows glued to sides, squeeze at bottom', emoji: '⬇️', visual: '💪' },
    { name: 'Skull Crusher', grip: 'Barbell overhead, lower to forehead, elbows still', emoji: '💀', visual: '😵' },
    { name: 'Overhead Extension', grip: 'Both hands on one DB, fully extend overhead', emoji: '☝️', visual: '🙌' },
    { name: 'Diamond Push-up', grip: 'Hands form diamond, elbows track back not out', emoji: '💎', visual: '⬆️' },
    { name: 'Cable Kickback', grip: 'Hinge forward, extend arm fully behind you', emoji: '🦵', visual: '🔄' },
    { name: 'Dips', grip: 'Lean slightly forward, go deep, squeeze at top', emoji: '📉', visual: '⬇️' },
  ],
  Shoulder: [
    { name: 'Overhead Press', grip: 'Just outside shoulder width, press straight up', emoji: '🏋️', visual: '☝️' },
    { name: 'Lateral Raise', grip: 'Slight bend in elbows, lead with elbows not hands', emoji: '↔️', visual: '🦅' },
    { name: 'Front Raise', grip: 'Arms straight, raise to shoulder height, controlled', emoji: '⬆️', visual: '🤲' },
    { name: 'Arnold Press', grip: 'Start with palms facing you, rotate as you press', emoji: '🔄', visual: '🦾' },
    { name: 'Face Pull', grip: 'Pull to face level, external rotation at end', emoji: '😤', visual: '💢' },
    { name: 'Shrugs', grip: 'Straight up, hold at top, don\'t roll shoulders', emoji: '🤷', visual: '⬆️' },
  ],
  Forearm: [
    { name: 'Wrist Curl', grip: 'Underhand, let wrist drop then curl up fully', emoji: '🤚', visual: '🔄' },
    { name: 'Reverse Wrist Curl', grip: 'Overhand grip, focus on top of forearm', emoji: '✋', visual: '🔄' },
    { name: 'Farmer\'s Walk', grip: 'Heavy DB, neutral grip, walk with control', emoji: '🚶', visual: '💼' },
    { name: 'Dead Hang', grip: 'Hang from bar, full extension, grip strength focus', emoji: '🏚️', visual: '🤜' },
  ],
  Chest: [
    { name: 'Bench Press', grip: 'Slightly wider than shoulder, bar to lower chest', emoji: '🏋️', visual: '🛏️' },
    { name: 'Incline Press', grip: '30-45° incline, targets upper chest', emoji: '📈', visual: '↗️' },
    { name: 'Chest Fly', grip: 'Wide arc, slight bend in elbows, stretch at bottom', emoji: '🦋', visual: '🦅' },
    { name: 'Push-up', grip: 'Shoulder width, full range, body straight as plank', emoji: '⬆️', visual: '🤸' },
    { name: 'Cable Crossover', grip: 'Squeeze hands together at the bottom', emoji: '✂️', visual: '🔀' },
    { name: 'Dumbbell Pullover', grip: 'Across bench, arc from chest to behind head', emoji: '🌊', visual: '🔄' },
  ],
  Back: [
    { name: 'Pull-up', grip: 'Overhand, shoulder width, full hang to chin over bar', emoji: '⬆️', visual: '🏋️' },
    { name: 'Barbell Row', grip: 'Hinge 45°, pull to lower chest, squeeze blades', emoji: '🚣', visual: '🔙' },
    { name: 'Lat Pulldown', grip: 'Wide overhand, pull to upper chest', emoji: '⬇️', visual: '📉' },
    { name: 'Seated Cable Row', grip: 'Neutral grip, pull elbows back, chest up', emoji: '🚣', visual: '🔁' },
    { name: 'Face Pull', grip: 'Rope attachment at eye level, pull to face', emoji: '😤', visual: '💢' },
    { name: 'Deadlift', grip: 'Hip-width stance, neutral spine, drive through heels', emoji: '🏋️', visual: '⚡' },
  ],
  Legs: [
    { name: 'Squat', grip: 'Shoulder width, toes out, sit into heels, chest up', emoji: '🦵', visual: '⬇️' },
    { name: 'Romanian Deadlift', grip: 'Hip hinge, feel hamstring stretch, straight back', emoji: '🔙', visual: '↘️' },
    { name: 'Leg Press', grip: 'Feet shoulder width, don\'t lock knees at top', emoji: '🦶', visual: '↗️' },
    { name: 'Lunges', grip: 'Step forward, back knee nearly touches floor', emoji: '🚶', visual: '↔️' },
    { name: 'Leg Curl', grip: 'Lying face down, curl heels to glutes', emoji: '🔄', visual: '🦵' },
    { name: 'Calf Raise', grip: 'Full stretch at bottom, pause at top', emoji: '👟', visual: '⬆️' },
  ],
  Core: [
    { name: 'Plank', grip: 'Forearms or hands, straight line head to heel', emoji: '📏', visual: '➡️' },
    { name: 'Crunches', grip: 'Hands behind head, exhale as you crunch up', emoji: '🔄', visual: '⬆️' },
    { name: 'Leg Raise', grip: 'Lying flat, raise legs to 90° then lower slowly', emoji: '⬆️', visual: '🦵' },
    { name: 'Russian Twist', grip: 'Seated, lean back, rotate torso side to side', emoji: '🌀', visual: '🔀' },
    { name: 'Mountain Climber', grip: 'Push-up position, drive knees to chest alternately', emoji: '🏔️', visual: '🏃' },
    { name: 'Bicycle Crunch', grip: 'Opposite elbow to knee, full rotation, controlled', emoji: '🚴', visual: '🔄' },
  ],
};

const BONUS_WORKOUTS = [
  { name: 'Thigh Fat Burn', emoji: '🦵', exercises: ['Sumo Squat','Lateral Lunge','Inner Thigh Squeeze','Curtsy Lunge'], desc: 'Targets inner & outer thigh fat' },
  { name: 'Belly Fat Burn', emoji: '🔥', exercises: ['Crunches','Leg Raise','Bicycle Crunch','Mountain Climber'], desc: 'Core fat reduction circuit' },
  { name: 'Waist Trim', emoji: '⌛', exercises: ['Russian Twist','Side Plank','Oblique Crunch','Wood Chop'], desc: 'Sculpts and trims the waist' },
  { name: 'Posture Fix', emoji: '🧘', exercises: ['Wall Angel','Shoulder Retraction','Cat-Cow','Chin Tuck'], desc: 'Correct rounded shoulders & back' },
  { name: 'Lower Back', emoji: '🦴', exercises: ['Glute Bridge','Bird-Dog','Dead Bug','Superman Hold'], desc: 'Strengthen & protect your back' },
  { name: 'Cardio Burst', emoji: '⚡', exercises: ['Jumping Jacks','High Knees','Burpees','Jump Rope'], desc: 'Quick calorie-burning session' },
  { name: 'Full Body Stretch', emoji: '🤸', exercises: ['Hip Flexor Stretch','Hamstring Stretch','Chest Opener','Shoulder Stretch'], desc: 'Flexibility & recovery' },
  { name: 'Arm Toning', emoji: '💪', exercises: ['Tricep Dip','Push-up','Resistance Band Curl','Overhead Tricep Extension'], desc: 'Tone arms without weights' },
];

const MOTIVATIONAL = [
  ['First set — warm up and lock in. Let\'s go! 🔥','You\'re just getting started. FORM. FOCUS. FIRE.'],
  ['Halfway through. Don\'t you dare slow down.','Every rep is building the body you want. KEEP GOING.'],
  ['Almost there. Two more left. You didn\'t come this far to quit.','The pain is temporary. The gains are permanent. PUSH.'],
  ['LAST SET. Give it everything you\'ve got!','This is the set that changes everything. LEAVE IT ALL.'],
];

// ═══════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════
let appState = {
  onboarded: false,
  schedule: {},
  profile: {},
  history: [],
  streak: 0,
  lastDate: null,
  todayDone: [],
};

let currentUser = null;
let isGuestMode = false;

let workoutFlow = {
  stage: 'select-muscle',
  muscle: null, exercise: null,
  sets: 3, reps: 10,
  currentSet: 0,
  isBonus: false, bonusData: null,
};

let currentTab = 'home';
let obStep = 1;
let tempSchedule = {};
let restInterval = null;
let saveDebounce = null;

// ═══════════════════════════════════════════
// 🔥 FIREBASE AUTH
// ═══════════════════════════════════════════

// Google Sign-In
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  setLoadingText('Signing in with Google...');
  showScreen('screen-loading');
  auth.signInWithPopup(provider)
    .catch(err => {
      showScreen('screen-login');
      showToast('Sign-in failed: ' + err.message);
    });
}

// Guest mode — uses localStorage only
function signInAsGuest() {
  isGuestMode = true;
  currentUser = null;
  loadLocal();
  if (appState.onboarded) {
    checkDayReset();
    showDashboard();
  } else {
    showOnboarding();
  }
}

// Sign out
function signOut() {
  if (isGuestMode) {
    isGuestMode = false;
    appState = { onboarded:false, schedule:{}, profile:{}, history:[], streak:0, lastDate:null, todayDone:[] };
    showScreen('screen-login');
    return;
  }
  auth.signOut().then(() => {
    currentUser = null;
    appState = { onboarded:false, schedule:{}, profile:{}, history:[], streak:0, lastDate:null, todayDone:[] };
    showScreen('screen-login');
  });
}

// Auth state listener — fires on every page load
auth.onAuthStateChanged(user => {
  if (user) {
    currentUser = user;
    isGuestMode = false;
    setLoadingText('Loading your data...');
    showScreen('screen-loading');
    loadFromFirestore()
      .then(() => {
        checkDayReset();
        updateHeaderPhoto();
        if (appState.onboarded) showDashboard();
        else showOnboarding();
      })
      .catch(() => {
        // Fallback to localStorage if Firestore fails
        loadLocal();
        checkDayReset();
        if (appState.onboarded) showDashboard();
        else showOnboarding();
      });
  } else {
    // Not signed in — show login screen
    if (!isGuestMode) {
      showScreen('screen-login');
    }
  }
});

// ═══════════════════════════════════════════
// 🔥 FIRESTORE — SAVE & LOAD
// ═══════════════════════════════════════════

// Save to Firestore (debounced — waits 1.5s before writing to avoid hammering DB)
function save() {
  saveLocal(); // Always save locally as backup
  if (!currentUser || isGuestMode) return;
  clearTimeout(saveDebounce);
  saveDebounce = setTimeout(() => saveToFirestore(), 1500);
}

async function saveToFirestore() {
  if (!currentUser) return;
  try {
    await db.collection('users').doc(currentUser.uid).set({
      appState: JSON.parse(JSON.stringify(appState)),
      lastSynced: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } catch(e) {
    console.warn('Firestore save failed, using local:', e);
  }
}

async function loadFromFirestore() {
  if (!currentUser) return;
  try {
    const doc = await db.collection('users').doc(currentUser.uid).get();
    if (doc.exists && doc.data().appState) {
      appState = { ...appState, ...doc.data().appState };
    } else {
      // New user — load from local as a starting point
      loadLocal();
    }
  } catch(e) {
    console.warn('Firestore load failed:', e);
    loadLocal();
  }
}

// ═══════════════════════════════════════════
// LOCAL STORAGE (backup / guest mode)
// ═══════════════════════════════════════════
function saveLocal() {
  try { localStorage.setItem('repforge_v1', JSON.stringify(appState)); } catch(e) {}
}

function loadLocal() {
  try {
    const d = localStorage.getItem('repforge_v1');
    if (d) appState = { ...appState, ...JSON.parse(d) };
  } catch(e) {}
}

// ═══════════════════════════════════════════
// INIT HELPERS
// ═══════════════════════════════════════════
function setLoadingText(msg) {
  const el = document.getElementById('loading-text');
  if(el) el.textContent = msg;
}

function updateHeaderPhoto() {
  const el = document.getElementById('header-user-photo');
  if (!el || !currentUser) return;
  if (currentUser.photoURL) {
    el.innerHTML = `<img src="${currentUser.photoURL}" style="width:30px;height:30px;border-radius:50%;border:2px solid var(--orange);" alt="profile">`;
  }
}

function checkDayReset() {
  const today = getTodayKey();
  if (appState.lastDate && appState.lastDate !== today) {
    const yesterday = getYesterdayKey();
    if (appState.lastDate !== yesterday) appState.streak = 0;
    appState.todayDone = [];
    save();
  }
}

// ═══════════════════════════════════════════
// ONBOARDING
// ═══════════════════════════════════════════
function showOnboarding() {
  showScreen('screen-onboard');
  buildScheduleBuilder('schedule-builder', tempSchedule, false);
}

function buildScheduleBuilder(containerId, scheduleObj, isEdit) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  DAYS.forEach(day => {
    const selected = scheduleObj[day] || [];
    const isRest = selected === 'rest' || selected[0] === 'rest';
    const card = document.createElement('div');
    card.className = 'day-card' + (isRest ? ' rest-day' : (Array.isArray(selected) && selected.length === 2 ? ' complete' : ''));
    card.id = 'daycard-' + day;
    const count = Array.isArray(selected) ? selected.filter(m=>m!=='rest').length : 0;
    const badgeText = isRest ? 'REST' : count === 2 ? '✓ SET' : `${count}/2`;
    const badgeClass = isRest ? 'badge-rest' : count === 2 ? 'badge-ok' : 'badge-pick';
    card.innerHTML = `
      <div class="day-name">${day.toUpperCase()} <span class="day-badge ${badgeClass}">${badgeText}</span></div>
      <div class="edit-pill-wrap" id="pills-${day}">
        ${MUSCLES.map(m => {
          const sel = Array.isArray(selected) && selected.includes(m);
          return `<span class="edit-pill${sel?' sel':''}" onclick="toggleMuscle('${day}','${m}','${containerId==='schedule-builder'?'ob':'edit'}',${isEdit})">${m}</span>`;
        }).join('')}
        <span class="edit-pill${isRest?' rest-sel':''}" onclick="toggleRest('${day}','${containerId==='schedule-builder'?'ob':'edit'}',${isEdit})">Rest</span>
      </div>`;
    container.appendChild(card);
  });
}

function toggleMuscle(day, muscle, mode, isEdit) {
  const target = mode === 'ob' ? tempSchedule : appState.schedule;
  if (target[day] === 'rest') { showToast('Remove rest day first'); return; }
  if (!Array.isArray(target[day])) target[day] = [];
  const idx = target[day].indexOf(muscle);
  if (idx > -1) { target[day].splice(idx, 1); }
  else {
    if (target[day].length >= 2) { showToast('Max 2 muscle groups per day'); return; }
    target[day].push(muscle);
  }
  buildScheduleBuilder(mode==='ob'?'schedule-builder':'edit-builder', target, isEdit);
}

function toggleRest(day, mode, isEdit) {
  const target = mode === 'ob' ? tempSchedule : appState.schedule;
  const restCount = DAYS.filter(d => target[d] === 'rest').length;
  if (target[day] === 'rest') { target[day] = []; }
  else {
    if (restCount >= 2) { showToast('Max 2 rest days allowed'); return; }
    target[day] = 'rest';
  }
  buildScheduleBuilder(mode==='ob'?'schedule-builder':'edit-builder', target, isEdit);
}

function validateSchedule(sched) {
  let errors = [];
  let restDays = 0;
  DAYS.forEach(day => {
    if (sched[day] === 'rest') { restDays++; return; }
    const arr = Array.isArray(sched[day]) ? sched[day] : [];
    if (arr.length !== 2) errors.push(day + ' needs 2 muscle groups');
  });
  if (restDays > 2) errors.push('Max 2 rest days');
  return errors;
}

document.getElementById('ob-next-btn').addEventListener('click', () => {
  if (obStep === 1) {
    const errs = validateSchedule(tempSchedule);
    if (errs.length) { showToast(errs[0]); return; }
    document.getElementById('ob-step1').style.display = 'none';
    document.getElementById('ob-step2').style.display = 'block';
    document.getElementById('ob-back-btn').style.display = 'flex';
    document.getElementById('ob-next-btn').textContent = 'Start Training →';
    document.querySelectorAll('#onboard-dots .step-dot')[0].classList.remove('active');
    document.querySelectorAll('#onboard-dots .step-dot')[0].classList.add('done');
    document.querySelectorAll('#onboard-dots .step-dot')[1].classList.add('active');
    obStep = 2;
  } else {
    const name = document.getElementById('p-name').value.trim();
    if (!name) { showToast('Please enter your name'); return; }
    const age = document.getElementById('p-age').value;
    if (!age || age < 10 || age > 100) { showToast('Enter a valid age'); return; }
    const weight = document.getElementById('p-weight').value;
    const height = document.getElementById('p-height').value;
    if (!weight || !height) { showToast('Enter weight and height'); return; }
    const units = document.querySelector('input[name="units"]:checked').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const level = document.querySelector('input[name="level"]:checked').value;
    appState.profile = { name, age:+age, gender, units, weight:+weight, height:+height, goal:document.getElementById('p-goal').value, level, injury:document.getElementById('p-injury').value };
    appState.schedule = tempSchedule;
    appState.onboarded = true;
    appState.streak = 0;
    appState.history = [];
    appState.todayDone = [];
    save();
    showDashboard();
  }
});

document.getElementById('ob-back-btn').addEventListener('click', () => {
  document.getElementById('ob-step2').style.display = 'none';
  document.getElementById('ob-step1').style.display = 'block';
  document.getElementById('ob-back-btn').style.display = 'none';
  document.getElementById('ob-next-btn').textContent = 'Next — Build Profile →';
  document.querySelectorAll('#onboard-dots .step-dot')[1].classList.remove('active');
  document.querySelectorAll('#onboard-dots .step-dot')[0].classList.remove('done');
  document.querySelectorAll('#onboard-dots .step-dot')[0].classList.add('active');
  obStep = 1;
});

document.querySelectorAll('input[name="units"]').forEach(r => r.addEventListener('change', () => {
  const m = r.value === 'metric';
  document.getElementById('weight-label').textContent = 'Weight (' + (m?'kg':'lbs') + ')';
  document.getElementById('height-label').textContent = 'Height (' + (m?'cm':'ft/in') + ')';
}));

// ═══════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════
function showDashboard() {
  showScreen('screen-dashboard');
  updateHeaderPhoto();
  switchTab('home');
}

function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  renderDashboard();
}

function renderDashboard() {
  const content = document.getElementById('dashboard-content');
  if (currentTab === 'home') renderHome(content);
  else if (currentTab === 'history') renderHistory(content);
  else renderProfile(content);
}

function renderHome(content) {
  const today = getTodayName();
  const todaySched = appState.schedule[today];
  const isRest = todaySched === 'rest';
  const muscles = isRest ? [] : (Array.isArray(todaySched) ? todaySched : []);
  const totalSessions = appState.history.length;
  const streak = appState.streak;
  const syncBadge = currentUser
    ? `<div class="sync-badge">☁️ Synced</div>`
    : `<div class="sync-badge guest">📱 Guest Mode</div>`;

  content.innerHTML = `
    <div class="animate-up">
      ${syncBadge}
      <div class="stats-strip mb-20">
        <div class="stat-box"><div class="stat-val">${streak}</div><div class="stat-lbl">Day Streak</div></div>
        <div class="stat-box"><div class="stat-val">${totalSessions}</div><div class="stat-lbl">Sessions</div></div>
        <div class="stat-box"><div class="stat-val">${appState.profile.weight||'—'}<span style="font-size:1rem;color:var(--text3)">${appState.profile.units==='metric'?'kg':'lb'}</span></div><div class="stat-lbl">Weight</div></div>
      </div>
      ${isRest ? `
        <div class="rest-screen-card mb-20">
          <div style="font-size:3rem;margin-bottom:12px;">😴</div>
          <div class="font-display" style="font-size:2rem;letter-spacing:3px;margin-bottom:8px;">REST DAY</div>
          <div style="color:var(--text2);font-size:0.95rem;line-height:1.5;">Recovery is where the gains are made. Sleep well, eat right, come back stronger tomorrow.</div>
        </div>
      ` : `
        <div class="hero-day mb-20">
          <div class="hero-label">${today.toUpperCase()} · TODAY'S TRAINING</div>
          <div class="hero-title">${muscles.join(' +\n')}</div>
          <div class="hero-muscles">Your muscles for today: <strong>${muscles.join(' & ')}</strong></div>
          <button class="btn btn-primary" onclick="startWorkoutFlow(false)">Start Today's Workout →</button>
        </div>
      `}
      ${!isRest ? `
        <div class="section-title">TODAY'S MUSCLES</div>
        <div class="muscle-grid mb-20">
          ${muscles.map(m => `
            <div class="muscle-card${appState.todayDone.includes(m)?' done-today':''}" onclick="startSpecificMuscle('${m}')">
              <span class="mc-emoji">${MUSCLE_EMOJIS[m]||'💪'}</span>
              <div class="mc-name">${m.toUpperCase()}</div>
              <div class="mc-sub">${appState.todayDone.includes(m)?'✓ Done — tap to redo':'Tap to start'}</div>
            </div>
          `).join('')}
        </div>
      ` : ''}
      <div class="section-title">BONUS WORKOUTS</div>
      <div class="bonus-grid mb-20">
        ${BONUS_WORKOUTS.map((b,i) => `
          <div class="bonus-card" onclick="startBonusWorkout(${i})">
            <span class="bc-emoji">${b.emoji}</span>
            <div class="bc-name">${b.name}</div>
          </div>
        `).join('')}
      </div>
    </div>`;
}

function renderHistory(content) {
  const history = [...appState.history].reverse();
  if (!history.length) {
    content.innerHTML = `<div class="empty-state animate-fade"><div class="es-icon">📋</div><div class="es-text">No sessions yet.<br>Complete your first workout to see history here.</div></div>`;
    return;
  }
  content.innerHTML = `
    <div class="animate-fade">
      <div class="section-title" style="margin-bottom:16px;">WORKOUT HISTORY</div>
      ${history.map(h => {
        const d = new Date(h.date);
        const dayStr = d.toLocaleDateString('en-US',{weekday:'short'}).toUpperCase();
        const dateStr = d.getDate();
        return `<div class="history-item">
          <div class="history-date">${dayStr}<small>${dateStr}</small></div>
          <div class="history-info">
            <div class="history-ex">${h.exercise}</div>
            <div class="history-detail">${h.sets} sets × ${h.reps} reps</div>
          </div>
          <div class="history-muscle">${h.muscle}</div>
        </div>`;
      }).join('')}
    </div>`;
}

function renderProfile(content) {
  const p = appState.profile;
  const units = p.units === 'metric' ? 'kg / cm' : 'lbs / ft';
  const accountSection = currentUser ? `
    <div class="card mb-20" style="border-color:var(--orange);background:var(--orange-dim);">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
        ${currentUser.photoURL ? `<img src="${currentUser.photoURL}" style="width:40px;height:40px;border-radius:50%;">` : '<div style="width:40px;height:40px;border-radius:50%;background:var(--bg4);display:flex;align-items:center;justify-content:center;">👤</div>'}
        <div>
          <div style="font-weight:600;font-size:0.95rem;">${currentUser.displayName || 'User'}</div>
          <div style="font-size:0.78rem;color:var(--text2);">${currentUser.email}</div>
        </div>
      </div>
      <div style="font-size:0.78rem;color:var(--text2);margin-bottom:10px;">☁️ Your data is automatically synced across all your devices.</div>
    </div>` : `
    <div class="card mb-20" style="border-color:#444;">
      <div style="font-size:0.88rem;color:var(--text2);margin-bottom:10px;">📱 You're in Guest Mode. Data is saved on this device only.</div>
      <button class="btn btn-primary btn-sm" onclick="showScreen('screen-login')">Sign in with Google to Sync</button>
    </div>`;

  content.innerHTML = `
    <div class="animate-fade">
      ${accountSection}
      <div class="profile-avatar">👤</div>
      <div class="profile-name">${p.name||'Athlete'}</div>
      <div class="profile-goal">${p.goal||'Build Muscle'}</div>
      <div class="card mb-20">
        <div class="info-row"><span class="info-key">Age</span><span class="info-val">${p.age||'—'} yrs</span></div>
        <div class="info-row"><span class="info-key">Gender</span><span class="info-val">${p.gender||'—'}</span></div>
        <div class="info-row"><span class="info-key">Weight</span><span class="info-val">${p.weight||'—'} ${p.units==='metric'?'kg':'lbs'}</span></div>
        <div class="info-row"><span class="info-key">Height</span><span class="info-val">${p.height||'—'} ${p.units==='metric'?'cm':'in'}</span></div>
        <div class="info-row"><span class="info-key">Units</span><span class="info-val">${units}</span></div>
        <div class="info-row"><span class="info-key">Level</span><span class="info-val">${p.level||'—'}</span></div>
        ${p.injury?`<div class="info-row"><span class="info-key">Limitations</span><span class="info-val">${p.injury}</span></div>`:''}
      </div>
      <div class="section-title">THIS WEEK</div>
      <div class="card mb-20">
        ${DAYS.map(day => {
          const s = appState.schedule[day];
          const isRest = s === 'rest';
          const muscles = Array.isArray(s) ? s : [];
          return `<div class="info-row">
            <span class="info-key">${day.slice(0,3)}</span>
            <span class="info-val">${isRest?'😴 Rest':muscles.join(' + ')||'—'}</span>
          </div>`;
        }).join('')}
      </div>
      <button class="btn btn-outline-orange mb-16" onclick="showToast('Edit profile coming soon!')">Edit Profile</button>
      <button class="btn btn-ghost mb-16" onclick="confirmSignOut()">
        ${currentUser ? '🚪 Sign Out' : '🚪 Exit Guest Mode'}
      </button>
      <button class="btn btn-ghost" style="color:#ff4444;border-color:#ff4444;" onclick="confirmReset()">🗑️ Reset All Data</button>
    </div>`;
}

function confirmSignOut() {
  if (confirm('Sign out of RepForge?')) signOut();
}

function confirmReset() {
  if (confirm('Reset ALL your data? This cannot be undone!')) {
    localStorage.removeItem('repforge_v1');
    if (currentUser) {
      db.collection('users').doc(currentUser.uid).delete()
        .then(() => location.reload())
        .catch(() => location.reload());
    } else {
      location.reload();
    }
  }
}

// ═══════════════════════════════════════════
// EDIT SCHEDULE MODAL
// ═══════════════════════════════════════════
function openEdit() {
  document.getElementById('edit-modal').style.display = 'block';
  buildScheduleBuilder('edit-builder', JSON.parse(JSON.stringify(appState.schedule)), true);
}
function closeEdit() { document.getElementById('edit-modal').style.display = 'none'; }
function saveEdit() {
  const errs = validateSchedule(appState.schedule);
  if (errs.length) { showToast(errs[0]); return; }
  save();
  closeEdit();
  renderDashboard();
  showToast('Schedule updated! 💪');
}

// ═══════════════════════════════════════════
// WORKOUT FLOW
// ═══════════════════════════════════════════
function startWorkoutFlow(isBonus) {
  workoutFlow = { stage:'select-muscle', muscle:null, exercise:null, sets:3, reps:10, currentSet:0, isBonus:false, bonusData:null };
  showScreen('screen-workout');
  renderWorkout();
}

function startSpecificMuscle(muscle) {
  workoutFlow = { stage:'select-exercise', muscle, exercise:null, sets:3, reps:10, currentSet:0, isBonus:false, bonusData:null };
  showScreen('screen-workout');
  renderWorkout();
}

function startBonusWorkout(idx) {
  const bonus = BONUS_WORKOUTS[idx];
  workoutFlow = { stage:'select-exercise', muscle:bonus.name, exercise:null, sets:3, reps:10, currentSet:0, isBonus:true, bonusData:bonus };
  showScreen('screen-workout');
  renderWorkout();
}

function renderWorkout() {
  const content = document.getElementById('workout-content');
  const titleEl = document.getElementById('workout-header-title');

  if (workoutFlow.stage === 'select-muscle') {
    const today = getTodayName();
    const todaySched = appState.schedule[today];
    const muscles = Array.isArray(todaySched) ? todaySched : [];
    titleEl.textContent = 'CHOOSE MUSCLE';
    content.innerHTML = `
      <div class="animate-up">
        <div class="step-header">
          <div class="step-tag">${today.toUpperCase()}</div>
          <div class="step-h1">WHICH MUSCLE FIRST?</div>
        </div>
        <div class="muscle-grid">
          ${muscles.map(m => `
            <div class="muscle-card" onclick="selectMuscle('${m}')">
              <span class="mc-emoji">${MUSCLE_EMOJIS[m]||'💪'}</span>
              <div class="mc-name">${m.toUpperCase()}</div>
            </div>`).join('')}
        </div>
      </div>`;
  }

  else if (workoutFlow.stage === 'select-exercise') {
    titleEl.textContent = (workoutFlow.muscle||'').toUpperCase();
    const exList = workoutFlow.isBonus
      ? workoutFlow.bonusData.exercises.map(name => ({ name, grip:'Focus on form and breathing', emoji:'⚡', visual:'🔥' }))
      : (EXERCISES[workoutFlow.muscle]||[]);
    const suggestion = getSuggestion();
    content.innerHTML = `
      <div class="animate-up">
        <div class="step-header">
          <div class="step-tag">${workoutFlow.muscle}</div>
          <div class="step-h1">PICK AN EXERCISE</div>
          <div class="step-desc">${workoutFlow.isBonus?(workoutFlow.bonusData.desc||''):'Select the exercise you want to crush today.'}</div>
        </div>
        ${exList.map((ex,i) => `
          <div class="exercise-item animate-up" style="animation-delay:${i*0.05}s" onclick="selectExercise(${i})">
            <div class="ex-visual">${ex.emoji}</div>
            <div class="ex-info">
              <div class="ex-name">${ex.name}</div>
              <div class="ex-grip">${ex.grip}</div>
            </div>
            <div class="ex-arrow">›</div>
          </div>`).join('')}
        ${suggestion?`<div style="margin-top:16px;padding:12px 14px;background:var(--bg3);border-radius:10px;border-left:3px solid var(--orange);font-size:0.85rem;color:var(--text2);">💡 <strong style="color:var(--text);">For ${appState.profile.goal}:</strong> ${suggestion}</div>`:''}
      </div>`;
  }

  else if (workoutFlow.stage === 'set-reps') {
    titleEl.textContent = 'SET IT UP';
    const suggestion = getSuggestion();
    content.innerHTML = `
      <div class="animate-up">
        <div class="step-header">
          <div class="step-tag">${workoutFlow.muscle} · ${workoutFlow.exercise.name}</div>
          <div class="step-h1">SETS & REPS</div>
        </div>
        <div class="card mb-20" style="text-align:center;padding:20px;font-size:3rem;">${workoutFlow.exercise.emoji}</div>
        <div class="card mb-20" style="border-left:3px solid var(--orange);border-radius:10px;padding:14px 16px;font-size:0.85rem;color:var(--text2);">
          <strong style="color:var(--text);">Grip & Form:</strong> ${workoutFlow.exercise.grip}
        </div>
        ${suggestion?`<div style="margin-bottom:16px;padding:12px 14px;background:var(--bg3);border-radius:10px;border-left:3px solid #22c55e;font-size:0.85rem;color:var(--text2);">💡 <strong style="color:var(--success);">Suggested for ${appState.profile.goal}:</strong> ${suggestion}</div>`:''}
        <div class="stepper-row">
          <div class="stepper-label">Sets</div>
          <div class="stepper" style="flex:1">
            <button class="stepper-btn" onclick="adjSets(-1)">−</button>
            <div class="stepper-val" id="sets-val">${workoutFlow.sets}</div>
            <button class="stepper-btn" onclick="adjSets(1)">+</button>
          </div>
        </div>
        <div class="stepper-row">
          <div class="stepper-label">Reps</div>
          <div class="stepper" style="flex:1">
            <button class="stepper-btn" onclick="adjReps(-1)">−</button>
            <div class="stepper-val" id="reps-val">${workoutFlow.reps}</div>
            <button class="stepper-btn" onclick="adjReps(1)">+</button>
          </div>
        </div>
        <div style="margin-top:24px;">
          <button class="btn btn-primary pulse" onclick="startActiveWorkout()">🔥 Start Workout</button>
        </div>
      </div>`;
  }

  else if (workoutFlow.stage === 'active') {
    const cur = workoutFlow.currentSet;
    const total = workoutFlow.sets;
    const mIdx = Math.min(cur, MOTIVATIONAL.length-1);
    const motiv = MOTIVATIONAL[mIdx][Math.floor(Math.random()*2)];
    titleEl.textContent = workoutFlow.exercise.name.toUpperCase();
    content.innerHTML = `
      <div class="animate-fade">
        <div class="set-display">
          <div class="set-of">SET</div>
          <div class="set-number">${cur+1}</div>
          <div class="set-of">OF ${total}</div>
          <div class="set-reps" style="margin-top:12px;">${workoutFlow.reps} REPS</div>
        </div>
        <div class="motivational">${motiv}</div>
        <button class="btn btn-success" style="font-size:1.2rem;padding:18px;" onclick="finishSet()">✅ Finished Set ${cur+1}</button>
        <div style="margin-top:12px;">
          <div class="progress-bar"><div class="progress-fill" style="width:${((cur)/total)*100}%"></div></div>
          <div style="text-align:center;margin-top:8px;font-family:'Barlow Condensed';font-size:0.85rem;color:var(--text3);">${cur} / ${total} sets complete</div>
        </div>
        <div style="margin-top:16px;padding:14px;background:var(--bg2);border-radius:10px;text-align:center;">
          <div style="font-size:2rem;margin-bottom:6px;">${workoutFlow.exercise.emoji}</div>
          <div style="font-size:0.82rem;color:var(--text2);">${workoutFlow.exercise.grip}</div>
        </div>
      </div>`;
  }

  else if (workoutFlow.stage === 'rest') {
    titleEl.textContent = 'REST';
    content.innerHTML = `
      <div class="animate-fade">
        <div class="rest-timer">
          <div class="timer-label">REST TIME</div>
          <div class="timer-val" id="timer-display">00:60</div>
          <div class="timer-label">before set ${workoutFlow.currentSet+1} of ${workoutFlow.sets}</div>
        </div>
        <div class="motivational">Catch your breath. Next set is gonna be even better.</div>
        <button class="btn btn-outline-orange" onclick="skipRest()">Skip Rest →</button>
      </div>`;
    startRestTimer(60);
  }
}

function selectMuscle(muscle) { workoutFlow.muscle=muscle; workoutFlow.stage='select-exercise'; renderWorkout(); }

function selectExercise(idx) {
  const exList = workoutFlow.isBonus
    ? workoutFlow.bonusData.exercises.map(name=>({name,grip:'Focus on form and breathing',emoji:'⚡',visual:'🔥'}))
    : (EXERCISES[workoutFlow.muscle]||[]);
  workoutFlow.exercise = exList[idx];
  workoutFlow.stage = 'set-reps';
  renderWorkout();
}

function adjSets(d) { workoutFlow.sets=Math.max(1,Math.min(10,workoutFlow.sets+d)); document.getElementById('sets-val').textContent=workoutFlow.sets; }
function adjReps(d) { workoutFlow.reps=Math.max(1,Math.min(50,workoutFlow.reps+d)); document.getElementById('reps-val').textContent=workoutFlow.reps; }

function startActiveWorkout() { workoutFlow.currentSet=0; workoutFlow.stage='active'; renderWorkout(); }

function finishSet() {
  workoutFlow.currentSet++;
  if (workoutFlow.currentSet >= workoutFlow.sets) { logSession(); showCelebration(); }
  else { workoutFlow.stage='rest'; renderWorkout(); }
}

function startRestTimer(seconds) {
  if (restInterval) clearInterval(restInterval);
  let remaining = seconds;
  function update() {
    const el = document.getElementById('timer-display');
    if (!el) { clearInterval(restInterval); return; }
    const m = Math.floor(remaining/60).toString().padStart(2,'0');
    const s = (remaining%60).toString().padStart(2,'0');
    el.textContent = `${m}:${s}`;
    if (remaining <= 0) { clearInterval(restInterval); workoutFlow.stage='active'; renderWorkout(); }
    remaining--;
  }
  update();
  restInterval = setInterval(update, 1000);
}

function skipRest() { if (restInterval) clearInterval(restInterval); workoutFlow.stage='active'; renderWorkout(); }

function logSession() {
  const today = getTodayKey();
  appState.history.push({ date:today, muscle:workoutFlow.muscle, exercise:workoutFlow.exercise.name, sets:workoutFlow.sets, reps:workoutFlow.reps });
  if (!workoutFlow.isBonus && !appState.todayDone.includes(workoutFlow.muscle)) appState.todayDone.push(workoutFlow.muscle);
  if (appState.lastDate !== today) {
    const yesterday = getYesterdayKey();
    appState.streak = (appState.lastDate===yesterday) ? appState.streak+1 : 1;
    appState.lastDate = today;
  }
  save();
}

function getSuggestion() {
  const goal = appState.profile.goal;
  const level = appState.profile.level;
  if (!goal) return null;
  const map = {
    'Build Muscle': level==='Beginner'?'3 sets × 10–12 reps with moderate weight':'4 sets × 6–10 reps, progressive overload',
    'Lose Fat': '3–4 sets × 15–20 reps, shorter rest (30–45s)',
    'Stay Fit': '3 sets × 12 reps, comfortable weight',
    'General Health': '2–3 sets × 12–15 reps, focus on form',
  };
  return map[goal] || null;
}

// ═══════════════════════════════════════════
// CELEBRATION
// ═══════════════════════════════════════════
function showCelebration() {
  const cel = document.getElementById('celebration');
  document.getElementById('celebrate-summary').textContent = `${workoutFlow.exercise.name} · ${workoutFlow.sets} sets × ${workoutFlow.reps} reps · ${workoutFlow.muscle}`;
  cel.classList.add('show');
  launchConfetti();
}

function closeCelebration(doAnother) {
  document.getElementById('celebration').classList.remove('show');
  document.getElementById('confetti-container').innerHTML = '';
  if (doAnother) { workoutFlow.stage='select-muscle'; showScreen('screen-workout'); renderWorkout(); }
  else { showScreen('screen-dashboard'); switchTab('home'); }
}

function launchConfetti() {
  const container = document.getElementById('confetti-container');
  container.innerHTML = '';
  const colors = ['#ff4500','#ff6a2f','#ffaa00','#ffffff','#cc1f00','#ff8c42'];
  for (let i=0;i<80;i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.cssText = `left:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*colors.length)]};width:${6+Math.random()*8}px;height:${6+Math.random()*8}px;border-radius:${Math.random()>0.5?'50%':'2px'};animation-duration:${2+Math.random()*2}s;animation-delay:${Math.random()*1.5}s;`;
    container.appendChild(el);
  }
}

// ═══════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════
function goBack() {
  if (workoutFlow.stage==='select-exercise') {
    const today = getTodayName();
    const muscles = Array.isArray(appState.schedule[today]) ? appState.schedule[today] : [];
    if (muscles.length>1 && !workoutFlow.isBonus) { workoutFlow.stage='select-muscle'; renderWorkout(); }
    else { showScreen('screen-dashboard'); switchTab('home'); }
  } else if (workoutFlow.stage==='set-reps') { workoutFlow.stage='select-exercise'; renderWorkout(); }
  else if (workoutFlow.stage==='active') {
    if (workoutFlow.currentSet===0) { workoutFlow.stage='set-reps'; renderWorkout(); }
    else { if(confirm('Quit this exercise?')) { showScreen('screen-dashboard'); switchTab('home'); } }
  } else if (workoutFlow.stage==='rest') {
    if (restInterval) clearInterval(restInterval);
    workoutFlow.stage='active'; workoutFlow.currentSet--;
    renderWorkout();
  } else { showScreen('screen-dashboard'); switchTab('home'); }
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ═══════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════
let toastTimeout;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(()=>t.classList.remove('show'), 2500);
}

// ═══════════════════════════════════════════
// DATE HELPERS
// ═══════════════════════════════════════════
function getTodayKey() { return new Date().toISOString().split('T')[0]; }
function getYesterdayKey() { const d=new Date(); d.setDate(d.getDate()-1); return d.toISOString().split('T')[0]; }
function getTodayName() { return DAYS[new Date().getDay()===0?6:new Date().getDay()-1]; }
