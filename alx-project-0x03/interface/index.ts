import React from "react"   
import { PageRouteProps } from "@/pages/index"
import { ButtonProps } from "@/components/common/Button"
import { ReactNode } from "react"
import { LayoutProps } from "@S/components/layouts/Layout"

interface PageRouteProps {
  pageRoute: string
}

interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}

interface LayoutProps {
  children: ReactNode;
}

export default interface Interface {
  PageRoute: React.FC<PageRouteProps>;
  Button: React.FC<ButtonProps>;
  Layout: React.FC<LayoutProps>;
}