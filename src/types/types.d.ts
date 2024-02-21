export type User = {
  id: string,
  created_at: string,
  name: string,
  location: string,
  website: string,
  name: string,
  github: string,
  twitter: string,
  avatar: string,
  username: string,
  projects: Project[]
}

export type Project = {
  id: string,
  name: string,
  updates: Update[],
  user_id: string,
  cohort_id: string,
  created_at: string,
  description: string
}

export type Update = {
  id: string,
  date: string,
  content: "string",
  created_at: string,
  project_id: string
}

export type Project = {

}