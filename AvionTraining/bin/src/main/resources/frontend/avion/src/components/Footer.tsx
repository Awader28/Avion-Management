const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-800  border-t rounded-sm">
            <div className="container mx-auto p-4">
                <div className="text-center text-gray-600 dark:text-gray-300">
                    © {new Date().getFullYear()} Avion. All rights reserved.

                </div>
            </div>
        </footer>
    );
}

export default Footer;
