import type { Metadata } from "next";

import { StyleEditor } from "@/components/style-editor";

export const metadata: Metadata = {
  title: "Website style editor",
  description: "Interne stijlconfigurator voor Dashing Blends.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function StyleEditorPage() {
  return <StyleEditor />;
}
