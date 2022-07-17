export default function Modal({toggle}){

  
    return (
        <div className="w-full  text-black bg-gray-700 bg-transparent h-screen z-100">
            <div className="bg-white p-4 rounded-md">
                An error occured while attempting to add your wallet.
                <br />
                Please try again later
                <hr className="my-4"/>
                    <button className="bg-blue-400 rounded-sm font-bold p-2" onClick={toggle}>Close</button>
            </div>
        </div>
    )
}