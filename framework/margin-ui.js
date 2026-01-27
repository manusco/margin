import { Previewer } from 'pagedjs';

class MarginUI {
    constructor() {
        this.previewer = new Previewer();
        this.init();
    }

    async init() {
        if (window.location.search.includes('preview=true') || window.location.hostname === 'localhost') {
            console.log('MARGIN: Document Preview Mode Active');
            this.renderPreview();
        }
    }

    async renderPreview() {
        const content = document.querySelector('.document');
        if (!content) return;

        // Paged.js rendering
        await this.previewer.preview(content.innerHTML, ['/framework/base.css'], document.body);

        // Remove the original content source to avoid duplication
        content.style.display = 'none';

        this.addOverlay();
        this.startOverflowMonitor();
    }

    addOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'margin-ui-overlay';
        overlay.className = 'margin-ui-overlay fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs z-[9999] backdrop-blur font-mono border border-white/10 shadow-xl';
        overlay.innerHTML = `
            <div class="font-bold mb-2 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                MARGIN Dev
            </div>
            <div class="space-y-1 text-[10px] text-slate-300">
                <div class="flex justify-between"><span>Pages:</span> <span id="margin-page-count" class="text-white">-</span></div>
                <div class="flex justify-between"><span>Overflows:</span> <span id="margin-overflow-count" class="text-white">0</span></div>
            </div>
            <div id="margin-alerts" class="text-red-400 mt-2 border-t border-white/10 pt-2 empty:hidden"></div>
        `;
        document.body.appendChild(overlay);

        // Update page count
        setTimeout(() => {
            const pages = document.querySelectorAll('.pagedjs_page');
            document.getElementById('margin-page-count').innerText = pages.length;
        }, 1000);
    }

    startOverflowMonitor() {
        // Simple logic: Check if any .pagedjs_page content area is overflowing
        // Paged.js handles splitting, but sometimes single elements are too tall
        setInterval(() => {
            const pages = document.querySelectorAll('.pagedjs_page_content');
            let overflowCount = 0;
            const alerts = document.getElementById('margin-alerts');
            alerts.innerHTML = '';

            pages.forEach((page, index) => {
                if (page.scrollHeight > page.clientHeight + 2) { // 2px buffer
                    overflowCount++;
                    page.style.boxShadow = 'inset 0 0 0 4px red'; // Visual warning
                    alerts.innerHTML += `<div class="font-bold">⚠️ Page ${index + 1} Overflow</div>`;
                } else {
                    page.style.boxShadow = '';
                }
            });

            document.getElementById('margin-overflow-count').innerText = overflowCount;
            if (overflowCount > 0) {
                document.getElementById('margin-overflow-count').className = 'text-red-500 font-bold';
            } else {
                document.getElementById('margin-overflow-count').className = 'text-emerald-500';
            }
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.marginUI = new MarginUI();
});
