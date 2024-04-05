import { createClient } from '@supabase/supabase-js'


export const supabase = createClient("https://zwbtoepdlduvsbfhbify.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3YnRvZXBkbGR1dnNiZmhiaWZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2NzcyNTEsImV4cCI6MjAyMzI1MzI1MX0.tZ2yGHs06Oo71XJoM35aIUn85Nwbc-1x-sdr5N5-oTA")


export const customTheme = {
    default: {
      colors: {
        brand: 'rgb(254 202 202)', //color of button
        brandAccent: 'rgb(254 202 202)', //outline of button
        brandButtonText: 'black', //text of button
        inputBackground: 'rgb(254 202 202)', //color of email and password boxes
        inputBorder: 'rgb(254 202 202)', //outline of above
      },
      fonts: {
        bodyFontFamily: `ui-monospace, sans-serif`,
        buttonFontFamily: `ui-monospace, sans-serif`,
        inputFontFamily: `ui-monospace, sans-serif`,
        labelFontFamily: `ui-monospace, sans-serif`,
      },
      borderWidths: {
        buttonBorderWidth: '1px',
        inputBorderWidth: '1px',
      },
      space: {
        labelBottomMargin: '8px', //line height
        anchorBottomMargin: '4px', //height between forgot your password? and don't have an account?
        buttonPadding: '10px 15px',
        buttonWidth: '100px',
        inputWidth: '10px',
      },
      radii: {
        borderRadiusButton: '4px',
        buttonBorderRadius: '4px',
        inputBorderRadius: '4px',
      },
    },
  }