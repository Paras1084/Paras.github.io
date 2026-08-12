document.addEventListener("DOMContentLoaded", () => {
    
    // 1. RECRUITER CONSOLE MESSAGE
    console.log("%c========================================", "color: #00ffcc; font-weight: bold;");
    console.log("%c    SYS_BOOT: OK", "color: #00ffcc;");
    console.log("%c    MEM_CHECK: OK", "color: #00ffcc;");
    console.log("%c    Looking under the hood? I see you.", "color: #d4af37; font-size: 14px; font-weight: bold;");
    console.log("%c    Let's build something together: parasshelar2006nov@gmail.com", "color: #fff; font-size: 12px;");
    console.log("%c========================================", "color: #00ffcc; font-weight: bold;");

    // 2. SCROLL REVEAL ANIMATIONS
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 3. PROJECT SEARCH BAR LOGIC
    const searchInput = document.getElementById('projectSearch');
    if(searchInput) {
        searchInput.addEventListener('keyup', function() {
            let filter = this.value.toLowerCase();
            let projects = document.querySelectorAll('.project-card');

            projects.forEach(project => {
                let text = project.innerText.toLowerCase();
                if (text.includes(filter)) {
                    project.style.display = 'block';
                    project.style.opacity = '0';
                    setTimeout(() => project.style.opacity = '1', 50);
                } else {
                    project.style.display = 'none';
                }
            });
        });
    }

// 4. PCB TRACE CURRENT SCROLL LOGIC
    const glowTrace = document.getElementById('glow-trace');
    if (glowTrace) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            
            // Calculate percentage (0.0 to 1.0)
            const scrollPercent = scrollTop / docHeight;
            
            // stroke-dashoffset of 100 means hidden, 0 means fully drawn
            // As scrollPercent increases, we reduce the offset to draw the line
            const drawLength = 100 - (scrollPercent * 100);
            
            glowTrace.style.strokeDashoffset = drawLength;
        });
    }

    // 5. SYSTEM OVERDRIVE LOGIC (EASTER EGG)
    const overrideTrigger = document.getElementById('override-trigger');
    const debugPanel = document.getElementById('debug-panel');
    const overrideSwitch = document.getElementById('overdrive-switch');
    const panelScreen = document.getElementById('panel-screen');
    const blackoutScreen = document.getElementById('blackout-screen');

    let isOverdrive = false;

    if(overrideTrigger) {
        overrideTrigger.addEventListener('click', () => {
            debugPanel.classList.toggle('active');
        });
    }

    if(overrideSwitch) {
        overrideSwitch.addEventListener('click', () => {
            if(!isOverdrive) {
                isOverdrive = true;
                overrideSwitch.classList.add('switched');
                panelScreen.style.color = "#ff0000";
                panelScreen.innerText = "INITIATING ROOT ACCESS...";
                
                setTimeout(() => {
                    blackoutScreen.classList.add('active');
                }, 300);

                setTimeout(() => {
                    document.body.setAttribute('data-theme', 'overdrive');
                    panelScreen.style.color = "#00ffcc";
                    panelScreen.innerText = "OVERDRIVE ENGAGED";
                }, 1000);

                setTimeout(() => {
                    blackoutScreen.classList.remove('active');
                    setTimeout(() => debugPanel.classList.remove('active'), 1500);
                }, 1500);

            } else {
                isOverdrive = false;
                overrideSwitch.classList.remove('switched');
                panelScreen.style.color = "#ff9900";
                panelScreen.innerText = "SYSTEM RESTORED";
                
                blackoutScreen.classList.add('active');
                
                setTimeout(() => {
                    document.body.removeAttribute('data-theme');
                }, 500);

                setTimeout(() => {
                    blackoutScreen.classList.remove('active');
                }, 1000);
            }
        });
    }
});