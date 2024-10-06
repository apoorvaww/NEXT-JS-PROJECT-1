'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from '../../util/cn'
import Link from 'next/link'

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink
                            href="/courses">
                            All courses
                        </HoveredLink>
                        <HoveredLink
                            href="/basic">
                            Basic Music Theory
                        </HoveredLink>
                        <HoveredLink
                            href="/basic">
                            Advanced Composition
                        </HoveredLink>
                        <HoveredLink
                            href="/basic">
                            Songwriting
                        </HoveredLink>
                        <HoveredLink
                            href="/basic">
                            Music Production
                        </HoveredLink>

                    </div>
                </MenuItem>


                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar;