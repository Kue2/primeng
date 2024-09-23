import { Component, inject } from '@angular/core';
import { AppConfigService } from '@service/appconfigservice';

@Component({
    standalone: true,
    selector: 'freya-logo',
    template: `
        <svg width="139" height="40" viewBox="0 0 139 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 0H10.5065V6.75772L29.7675 2.94574V11.7829L10.5065 15.5949V18.5407L29.7675 14.7287V23.5659L10.5065 27.3779V35.3488H0V0Z"
                [attr.fill]="fillColor"
            />
            <path
                d="M56.124 14.0885H51.6603V12.8153C51.6603 11.825 52.2227 11.2591 53.2068 11.2591H56.0889V6.20166H51.5197C47.5129 6.20166 45.4041 8.42978 45.4041 12.2848V14.0885H42.1705L42.2057 19.2521H45.3338V32.8683H51.8712V19.2521H56.124V14.0885Z"
                [attr.fill]="fillColor"
            />
            <path
                d="M69.8662 13.6433C67.611 13.6433 65.9902 14.2818 64.6512 15.8425L63.6294 13.7143H59.2249V32.8681H65.7788V23.1493C65.7788 20.7019 66.7654 19.6732 69.0557 19.6732H71.628V13.6433H69.8662Z"
                [attr.fill]="fillColor"
            />
            <path
                d="M94.2636 22.9079C94.2636 17.3697 90.0799 13.0232 84.0136 13.0232C78.0867 13.0232 73.7985 17.2996 73.7985 23.0832C73.7985 28.8668 78.1216 33.1782 84.0136 33.1782C88.7202 33.1782 92.5553 30.4792 93.8801 26.1678H87.3954C86.8027 27.2895 85.5127 27.9554 84.0136 27.9554C81.9566 27.9554 80.5969 26.8338 80.1786 24.6605H94.159C94.2287 24.0646 94.2636 23.5038 94.2636 22.9079ZM84.0136 18.1408C85.966 18.1408 87.3257 19.1573 87.8835 21.0502H80.2832C80.8061 19.1573 82.1309 18.1408 84.0136 18.1408Z"
                [attr.fill]="fillColor"
            />
            <path
                d="M109.533 13.6433L105.758 24.2429L101.701 13.6433H94.5737L102.441 31.2855C101.559 33.6686 100.819 34.3444 98.3135 34.3444H96.4789V39.9999H98.7369C103.676 39.9999 106.005 37.9013 108.58 31.9969L116.589 13.6433H109.533Z"
                [attr.fill]="fillColor"
            />
            <path
                d="M133.387 13.585L132.716 15.0598C131.163 13.7606 129.15 13.0232 126.891 13.0232C121.065 13.0232 116.899 17.2017 116.899 23.0656C116.899 28.9646 121.065 33.1782 126.891 33.1782C129.115 33.1782 131.092 32.476 132.646 31.2119L133.211 32.5462H138.295V13.585H133.387ZM127.774 27.4196C125.302 27.4196 123.501 25.5586 123.501 23.0656C123.501 20.6077 125.302 18.7818 127.774 18.7818C130.245 18.7818 132.046 20.6077 132.046 23.0656C132.046 25.5586 130.245 27.4196 127.774 27.4196Z"
                [attr.fill]="fillColor"
            />
        </svg>
    `,
})
export class FreyaLogo {
    configService = inject(AppConfigService);

    get fillColor() {
        return this.configService.appState().darkTheme ? 'var(--p-surface-900)' : 'var(--p-surface-0)';
    }
}
