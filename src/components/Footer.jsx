import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-amber-800 text-amber-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Cozy Corner Café</h3>
            <p>123 Coffee Street</p>
            <p>Café City, CC 12345</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <p>Monday - Friday: 7am - 8pm</p>
            <p>Saturday - Sunday: 8am - 9pm</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-amber-200"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-amber-200"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-amber-200"><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-amber-700">
          <p>&copy; 2024 Cozy Corner Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;