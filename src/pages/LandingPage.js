import Sidebar from "../components/layout/Sidebar";
import Cards from "../components/layout/Cards";
import Table from "../components/layout/Table";



const LandingPage = () => {
    return (
        <div class="flex h-screen bg-gray-100 text-gray-500">
            <div class="w-64 bg-white">
                <Sidebar />
            </div>
            <div class="flex-grow w-full">
                {/* Heading of Process */}
                <div className="flex justify-between m-10 text-gray-600">
                    <span className="font-bold">Dashboard</span>
                    <span>Icons</span>
                </div>
                {/* Cards */}
                <div className="grid grid-cols-5 gap-4 mx-10">
                    <Cards />
                </div>
                {/* Tables of Landing Page */}

                <div class="relative overflow-x-auto p-10">
                    <div class="relative overflow-x-auto shadow-md bg-white">
                        <Table />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default LandingPage;
