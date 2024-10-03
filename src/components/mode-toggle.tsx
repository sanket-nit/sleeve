import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <Button
        className='text-black dark:!text-white'
        variant={'none'}
        size='icon'
        onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
      >
        {theme === 'dark' ? <Sun className='' /> : <Moon className='' />}
      </Button>
    </>
  )
}
