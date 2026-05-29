function Footer() {
    return (
        <footer className="footer">
            <div className="foot-cont">
                <p className="cr">&copy; 2026 Metal Guitar Project | Keep Shredding</p>
                <div className="content">
                    <div className="socials">
                        <span>Socials:</span>
                        <a href="#facebook"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#instagram"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#twitter"><i className="fa-brands fa-x-twitter"></i></a>
                    </div>
                    <div className="feedback">
                        <span>Stay Updated:</span>
                        <input type="text" placeholder="Email Address" className="email"></input>
                        <button className="submit">submit</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;