/* eslint-disable react/prop-types */

const Footer = ({ filters }) => {
    return (
        <footer className="fixed bottom-4 left-4">
            <button className="py-2 px-8 mt-auto rounded-2xl bg-yellow-300/50 text-red-700 font-bold transition-colors hover:bg-yellow-500/50">{JSON.stringify(filters)}</button>
        </footer>
    );
}

export default Footer;