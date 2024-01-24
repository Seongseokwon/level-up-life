import type { Metadata } from 'next'
import './styles/global.scss';

export const metadata: Metadata = {
  title: 'Level Up Life',
  description: '레벨을 올리는 투두 앱',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id='portal'></div>
        <div className={'root-container'}>
          {children}
        </div>
      </body>
    </html>
  )
}
