import {Separator} from "@/components/ui/separator.tsx";

function Footer() {
    return (
        <footer className="mt-12 pb-8">
            <Separator/>
            <div className="align-element flex flex-col sm:flex-row items-center justify-between gap-2 pt-6 text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Comfy Store. All rights reserved.</p>
                <p>
                    Built with React, TypeScript &amp; Redux Toolkit &middot;{' '}
                    <a
                        href="https://github.com/DmitriyYaroshchuk/comfy-store"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 hover:text-foreground"
                    >
                        Source on GitHub
                    </a>
                </p>
            </div>
        </footer>
    )
}
export default Footer;
