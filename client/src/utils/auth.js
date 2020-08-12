import decode from 'jwt-decode';

class AuthService {

  login(idToken) {

    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  }

  logout() {
  
    localStorage.removeItem('id_token');
  
    window.location.assign('/');
  }

    getProfile() {
      return decode(this.getToken());
    }

    loggedIn() {

      const token = this.getToken();
      return !!token && !this.isTokenExpired(token);
    }
   
    isTokenExpired(token) {
      try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
          return true;
        } else return false;
      } catch (err) {
        return false;
      }
    }

    getToken() {

      return localStorage.getItem('id_token');
    }

    
}

export default new AuthService();
