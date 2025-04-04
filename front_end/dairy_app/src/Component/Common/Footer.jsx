const FooterComponent = () => {


    return (
        <footer>
            <span className="my-footer">
                Dairy App | All Right Reserved &copy; {new Date().getFullYear()}
            </span>
        </footer>
    );
};

export default FooterComponent;