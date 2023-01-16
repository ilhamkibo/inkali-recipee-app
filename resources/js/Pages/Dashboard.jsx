import Authenticated from "@/Layouts/Authenticated/Index";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard({auth}) {
    return (
        <Authenticated
            auth={auth}
        >
            <Head title="Dashboard" />

            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center items-center min-h-0">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <img
                            src="/images/reaktor.png"
                            alt=""
                            style={{ backgroundColor: "black", width: "970px" }}
                        />
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
