import Sidebar from "../components/Sidebar";



const LandingPage = () => {
    return (

        <div class="flex h-screen">
            <div class="w-64 bg-gray-100">
                <Sidebar />
            </div>
            <div class="flex-grow w-full">
                <h2>Hasan</h2>
            </div>
        </div>

    )
}
export default LandingPage;
