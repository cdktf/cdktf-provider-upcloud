# `loadbalancerDynamicCertificateBundle` Submodule <a name="`loadbalancerDynamicCertificateBundle` Submodule" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerDynamicCertificateBundle <a name="LoadbalancerDynamicCertificateBundle" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/loadbalancer_dynamic_certificate_bundle upcloud_loadbalancer_dynamic_certificate_bundle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer"></a>

```typescript
import { loadbalancerDynamicCertificateBundle } from '@cdktf/provider-upcloud'

new loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle(scope: Construct, id: string, config: LoadbalancerDynamicCertificateBundleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig">LoadbalancerDynamicCertificateBundleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig">LoadbalancerDynamicCertificateBundleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadbalancerDynamicCertificateBundle resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isConstruct"></a>

```typescript
import { loadbalancerDynamicCertificateBundle } from '@cdktf/provider-upcloud'

loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isTerraformElement"></a>

```typescript
import { loadbalancerDynamicCertificateBundle } from '@cdktf/provider-upcloud'

loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isTerraformResource"></a>

```typescript
import { loadbalancerDynamicCertificateBundle } from '@cdktf/provider-upcloud'

loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.generateConfigForImport"></a>

```typescript
import { loadbalancerDynamicCertificateBundle } from '@cdktf/provider-upcloud'

loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LoadbalancerDynamicCertificateBundle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadbalancerDynamicCertificateBundle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadbalancerDynamicCertificateBundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/loadbalancer_dynamic_certificate_bundle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerDynamicCertificateBundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.notAfter">notAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.notBefore">notBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.operationalState">operationalState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.hostnamesInput">hostnamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.hostnames">hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `notAfter`<sup>Required</sup> <a name="notAfter" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.notAfter"></a>

```typescript
public readonly notAfter: string;
```

- *Type:* string

---

##### `notBefore`<sup>Required</sup> <a name="notBefore" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.notBefore"></a>

```typescript
public readonly notBefore: string;
```

- *Type:* string

---

##### `operationalState`<sup>Required</sup> <a name="operationalState" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.operationalState"></a>

```typescript
public readonly operationalState: string;
```

- *Type:* string

---

##### `hostnamesInput`<sup>Optional</sup> <a name="hostnamesInput" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.hostnamesInput"></a>

```typescript
public readonly hostnamesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerDynamicCertificateBundleConfig <a name="LoadbalancerDynamicCertificateBundleConfig" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.Initializer"></a>

```typescript
import { loadbalancerDynamicCertificateBundle } from '@cdktf/provider-upcloud'

const loadbalancerDynamicCertificateBundleConfig: loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.hostnames">hostnames</a></code> | <code>string[]</code> | Certificate hostnames. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.keyType">keyType</a></code> | <code>string</code> | Private key type (`rsa` / `ecdsa`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.name">name</a></code> | <code>string</code> | The name of the bundle must be unique within customer account. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/loadbalancer_dynamic_certificate_bundle#id LoadbalancerDynamicCertificateBundle#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

Certificate hostnames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/loadbalancer_dynamic_certificate_bundle#hostnames LoadbalancerDynamicCertificateBundle#hostnames}

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

Private key type (`rsa` / `ecdsa`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/loadbalancer_dynamic_certificate_bundle#key_type LoadbalancerDynamicCertificateBundle#key_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the bundle must be unique within customer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/loadbalancer_dynamic_certificate_bundle#name LoadbalancerDynamicCertificateBundle#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/loadbalancer_dynamic_certificate_bundle#id LoadbalancerDynamicCertificateBundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



