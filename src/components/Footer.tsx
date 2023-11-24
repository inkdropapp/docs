import clsx from 'clsx'
import Link from 'next/link'

const FooterLink = (props: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      className={clsx(
        'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300',
      )}
      {...props}
    />
  )
}

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="relative mx-auto flex w-full flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
      <div className="absolute h-px w-full bg-slate-100 dark:bg-slate-800" />
      <div className="my-4 flex max-w-[100rem] flex-wrap gap-6 p-6">
        <FooterLink href="https://www.inkdrop.app/">
          &copy; {year} Inkdrop
        </FooterLink>
        <FooterLink href="https://twitter.com/inkdrop_app">
          X (Twitter)
        </FooterLink>
        <FooterLink href="https://forum.inkdrop.app/">User Forum</FooterLink>
        <FooterLink href="https://www.inkdrop.app/pricing">Pricing</FooterLink>
        <FooterLink href="https://my.inkdrop.app/plugins">Plugins</FooterLink>
        <FooterLink href="/faq">FAQ</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </div>
    </div>
  )
}
