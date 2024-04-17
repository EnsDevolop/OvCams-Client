import EditPanelContainer from "@/containers/write/EditPanelContainer"

export default function Home() {
  return typeof window !== "undefined" && <EditPanelContainer />
}
