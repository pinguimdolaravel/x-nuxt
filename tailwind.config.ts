import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    theme: {
        extend: {
            width: {
                tb: '0.625px'
            },
            colors: {
                twitter: '#1d9bf0',
                lines: '#2f3336'
            }
        }
    }
}
