import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
export interface SidebarLink {
    icon?: IconDefinition
    title: string
    to: string
    links?: SidebarLink[]
}