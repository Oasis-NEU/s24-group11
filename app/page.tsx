import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold">Fundies Partner Match</h1>
    
      <form action="" method="get" className="form">
  <div className="form">
    <label>Username: </label>
    <input type="text" name="name" id="name" required />
  </div>
  <div className="form">
    <label>Password: </label>
    <input type="password" name="password" id="password" required />
  </div>
  <div className="form">
    <input type="submit" value="Log In" />
  </div>
</form>
    
    
    </main>
  );
}

