export default function NavItem(
  { href, text }: { href: string, text: string }
) {
  return (
    <li className="[&>a>div]:hover:bg-Orange flex flex-col items-end justify-end">
      <a href={href} className="relative hover:opacity-100 transition-opacity duration-200 opacity-60">
        {text}
        <div className="border-transparen absolute -bottom-[27px]  duration-200 transition-all h-1 w-full"></div>
      </a>
    </li>
  )
}
