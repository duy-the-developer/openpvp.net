import { LocaleSwitcher } from '@/components/LocaleSwitcher'

export function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold">OpenPvP.net</h1>
      <LocaleSwitcher />
    </header>
  )
}
