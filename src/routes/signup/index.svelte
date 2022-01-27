<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session }) => {
		if (session.user) {
			return { redirect: '/', status: 302 };
		}
		return {};
	}
</script>

<script lang="ts">
    import { createForm } from 'felte';
    import { validator } from '@felte/validator-yup';
    import * as yup from 'yup';

    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
    });

    const { form } = createForm({
        extend: validator,
        validateSchema: schema,
        onSubmit: async (values) => {
        },
    })
</script>

<svelte:head>
	<title>Sign-Up</title>
</svelte:head>

<div class="hero min-h-screen mt-[-64px] pt-[64px] bg-no-repeat">
    <div class="flex-col justify-center hero-content lg:flex-row">
        <div class="text-center lg:text-left text-neutral-content">
            <h1 class="mb-5 text-5xl font-bold text-secondary">Sign-Up</h1>
            <p class="mb-5 lg:mr-20">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
                <form use:form>
                    <div class="form-control">
                        <label for="name" class="label"><span class="label-name">Name</span></label>
                        <input id="name" type="text" placeholder="Name" name="name" class="input input-bordered">
                    </div>
                    <div class="form-control">
                        <label for="email" class="label"><span class="label-text">Email</span></label>
                        <input id="email" type="text" placeholder="Email" name="email" class="input input-bordered">
                    </div>
                    <div class="form-control">
                        <label for="password" class="label"><span class="label-text">Password</span></label>
                        <input id="password" type="text" placeholder="Password" name="password" class="input input-bordered">
                    </div>
                    <div>
                        <input type="button" value="Sign up" class="btn btn-primary normal-case">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>