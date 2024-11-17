type HeaderProps = {
    title: string,
    subtitle?: string
}
const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
<>
<h1>{title.toUpperCase()}</h1>
<h4>{subtitle}</h4>
</>    )
}

export default Header