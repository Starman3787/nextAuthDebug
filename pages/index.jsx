import StandardButton from "../components/ui/StandardButton";

export default function Dashboard() {
    return (<>
        <div className="text-center">
            <strong className="text-[25px] leading-[30px] font-Figtree-Semibold text-white">
                Quark
            </strong>
            <StandardButton href={"/dashboard"} buttonText={"Go To Dashboard"} />
        </div>
    </>)
}
