const Modal = ({ isOpen, onClosse, onConfirm, message}) => {
    if (!isOpen) return null;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-md w-96 text-center">
                <h3 className="text-lg font-semibold mb-4">Are you sure?</h3>
                <p className="text-gray-600 mb-6">This action cannot be undone.</p>
                <div className="flex justify-between">
                    <button onClick={onClosse} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
                    <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
                </div>

            </div>

        </div>
    );
};
export default Modal;