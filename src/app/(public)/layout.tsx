"use client";
import * as React from "react";
import { ReactNode } from "react";
import Header from "@/components/Header";


export default function GithubSearch({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}
