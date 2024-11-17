type HeaderProps = {
    title: string,
    subtitle?:string
}
const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <div>{title}</div>
    )
}

export default Header