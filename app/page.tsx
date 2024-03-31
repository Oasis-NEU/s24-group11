'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { supabase } from './matching-form/supabase'
import { customTheme } from './matching-form/supabase'

import { useState, useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'

export default function Home() {
  const navigation = useRouter();

  const handleSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigation.push('/matching-form');
  };

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
          <div className="font-mono">
              <h1 className="text-lg">Fundies Partner Match Form</h1>
              <button className=" bg-red-200 hover:bg-red-300 px-5 rounded-md" onClick={() => logOut()}> Log out </button>
              <h1 className="pb-8 pt-8 text-lg">Lab Section</h1>
              <form>
                  <div className="pb-8 ">
                      <label htmlFor="name">Enter your lab section:    </label>
                      <input className="border border-black" type="text" id="labSection" required/>
                  </div>
              </form>
              <h1 className="text-lg pb-8">Availability</h1>
              <form className="flex flex-col space-y-4">
                  <div>
                      <label htmlFor="checkbox">Monday: </label>
                      <input type="checkbox" id="checkbox" />
                  </div>
                  <div>
                      <label htmlFor="checkbox">Tuesday: </label>
                      <input type="checkbox" id="checkbox" />
                  </div>
                  <div>
                      <label htmlFor="checkbox">Wednesday: </label>
                      <input type="checkbox" id="checkbox" />
                  </div>
                  <div>
                      <label htmlFor="checkbox">Thursday: </label>
                      <input type="checkbox" id="checkbox" />
                  </div>
                  <div>
                      <label htmlFor="checkbox">Friday: </label>
                      <input type="checkbox" id="checkbox" />
                  </div>
                  <div>
                      <label htmlFor="checkbox">Saturday: </label>
                      <input type="checkbox" id="checkbox" />
                  </div>
                  <div className="pb-4">
                      <label htmlFor="checkbox">Sunday: </label>
                      <input type="checkbox" id="checkbox" />
                  </div>
              </form>
              <button onClick={() => submit()} className="bg-red-200 hover:bg-red-300 px-5 rounded-md"> Submit </button>
          </div>
      );
  }
}

