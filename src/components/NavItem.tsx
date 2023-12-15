export default function NavItem(
  { href, text }: { href: string, text: string }
) {
  return (
    <li className="group">
      <a href={href} className="relative hover:opacity-100 transition-opacity duration-200 opacity-60">
        {text}
      </a>
      <div className="border-b-[4px] border-transparent group-hover:border-Orange duration-200 transition-all h-full w-full"></div>
    </li>
  )
}
