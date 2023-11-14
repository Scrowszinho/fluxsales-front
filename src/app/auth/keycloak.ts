import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

export default function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.keycloakUrl,
        realm: environment.keycloakRealm,
        clientId: environment.keycloakClientId,
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: true,
        checkLoginIframeInterval: 15,
      }});
}
