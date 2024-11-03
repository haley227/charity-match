import { sql } from "@vercel/postgres";
import { CharityCard } from "./CharityCard";

export default async function CharityCards({
  params
} : {
  params: { key: string, value: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from CHARITIES where ${params.key}=${params.value}`;

  return (
    <div>
      {rows.map((row) => (
        <CharityCard key={row.id} charityLogo={row.logo} charityName={row.name} charityShortDescription={row.description} />
      ))}
    </div>
  );
}