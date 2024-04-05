"use client"

import { supabase } from './supabase'
import { useState, useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { customTheme } from './supabase'


//login page
function Login() {
    const [session, setSession] = useState<any>(null)
    

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }: { data: { session: any}}) => {
            setSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
            setSession(session)
        });

        return () => subscription.unsubscribe();
    }, [])

    const logOut = () => {
        supabase.auth.signOut();
    };

    const submit = () => {
        supabase.auth.signOut(); //change signOut to something that collects the data
    };

    if (!session) {
        return  (
        <Auth
            supabaseClient={supabase}
            appearance={{ theme: customTheme }} //here is our custom design
            providers={[]}
            />
        );
    } else {
        return (
            <div>
                <button onClick={() => logOut()}> Log out </button>
                <h1>Lab Section</h1>
                <form>
                    <div>
                        <label htmlFor="name">Enter your lab section:</label>
                        <input type="text" id="labSection" required/>
                    </div>
                </form>
                <h1>Availability</h1>
                <form>
                    <div>
                        <label htmlFor="checkbox">Monday:</label>
                        <input type="checkbox" id="checkbox" />
                    </div>
                    <div>
                        <label htmlFor="checkbox">Tuesday:</label>
                        <input type="checkbox" id="checkbox" />
                    </div>
                    <div>
                        <label htmlFor="checkbox">Wednesday:</label>
                        <input type="checkbox" id="checkbox" />
                    </div>
                    <div>
                        <label htmlFor="checkbox">Thursday:</label>
                        <input type="checkbox" id="checkbox" />
                    </div>
                    <div>
                        <label htmlFor="checkbox">Friday:</label>
                        <input type="checkbox" id="checkbox" />
                    </div>
                    <div>
                        <label htmlFor="checkbox">Saturday:</label>
                        <input type="checkbox" id="checkbox" />
                    </div>
                    <div>
                        <label htmlFor="checkbox">Sunday:</label>
                        <input type="checkbox" id="checkbox" />
                    </div>
                </form>
                <button onClick={() => submit()}> Submit </button>
            </div>
        );
    }


}

export default Login