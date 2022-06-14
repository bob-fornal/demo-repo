
import hostnames from '@core/constants/hostnames.json';

export abstract class ApiAbstractionService {

  hostnames: any = hostnames;

  getHostname = (_window: any): string => _window.location.hostname;

  getApiAddress = (key: string): string => {
    const hostname: string = this.getHostname(window);
    const base = this.hostnames.BASE[hostname];
    
    let address: string = '';
    if (this.hostnames.online.hasOwnProperty(key) === true) {
      address = base + this.hostnames.online[key];
    } else {
      address = base + this.hostnames.offline[key];
    }
    return address;
  };
  
}