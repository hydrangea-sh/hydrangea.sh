import { FC, ReactNode } from "react"

import "./Clamp.scss"

interface ClampProps {
  children: ReactNode,
  className?: string
  id?: string
}

const Clamp: FC<ClampProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <section className="Clamper">
      <div className={className ?? "Content"} id={id ?? "Id"}>
        {children}
      </div>
    </section>
  )
}

export default Clamp