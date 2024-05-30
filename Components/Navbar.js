import Image from "next/image";

const Navbar = () => {
    return (
    <div className="container p-2">
        <div className="d-flex justify-content-center">
                <Image src={"/logo.svg"} width={225} height={125} alt="logo"/>
        </div>
    </div>
    );
}

export default Navbar;


