import h from './Header.module.css'

export function Header() {
    return (
        <header className={h.header}>
            <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/117bfc2d-044f-4583-8dc7-ed4e0e146692/dd6sbxv-6f66db4b-d0df-47bc-8615-a095aecceb78.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzExN2JmYzJkLTA0NGYtNDU4My04ZGM3LWVkNGUwZTE0NjY5MlwvZGQ2c2J4di02ZjY2ZGI0Yi1kMGRmLTQ3YmMtODYxNS1hMDk1YWVjY2ViNzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eZEeeT02avIfIPjfSfUrzFWyTzJnem9XWb8bERvKLcA"
                alt="" className={h.siteLogo}/>
        </header>
    )
}