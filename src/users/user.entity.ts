
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Post } from "../posts/posts.entity";
import { Profile } from './profile.entity';

@Entity({name:'users'})
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    username: string

    @Column()
    password: string

    @Column({type:'datetime', default: ()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date

    @Column({nullable: true})
    authStrategy: string

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile
    

    /* Para la relación con mucho */
    @OneToMany(() => Post, post => post.author)
    posts: Post[]

}

