import Link from "next/link";

export default function MainMenu() {
    return (
        <main>
            <div className="d-flex justify-content-center rounded-circle">
                <div className="d-flex justify-content-center rounded-circle bg-black m-2">
                    <div className="shadow bg-light d-flex justify-content-center text-black m-4 p-3 rounded-circle">
                        <form className="bg-danger shadow-lg p-5 rounded-circle ">
                            <div class="form-group">
                                <label className="text-white fw-bold" for="formGroupExampleInput">Username</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" />
                            </div>
                            <div class="form-group">
                                <label className="text-white fw-bold" for="formGroupExampleInput2">Password</label>
                                <input type="text" class="form-control" id="formGroupExampleInput2" />
                            </div>
                            <Link href="/pokemon">
                                <button type="button" className="btn bg-dark text-white btn-sm m-2 p-2">
                                    Login
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
