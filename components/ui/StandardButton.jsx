import Link from "next/link";
import Button from "./Button";

function StandardButton({ href, buttonText }) {
    return (
        <div className="text-center">
            <Link href={href}>
                <Button>
                    {buttonText}
                </Button>
            </Link>
        </div>
    );
}

export default StandardButton;