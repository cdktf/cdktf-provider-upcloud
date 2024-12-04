# `loadbalancerStaticBackendMember` Submodule <a name="`loadbalancerStaticBackendMember` Submodule" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerStaticBackendMember <a name="LoadbalancerStaticBackendMember" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/resources/loadbalancer_static_backend_member upcloud_loadbalancer_static_backend_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer"></a>

```typescript
import { loadbalancerStaticBackendMember } from '@cdktf/provider-upcloud'

new loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember(scope: Construct, id: string, config: LoadbalancerStaticBackendMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig">LoadbalancerStaticBackendMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig">LoadbalancerStaticBackendMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetPort">resetPort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetIp"></a>

```typescript
public resetIp(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetPort"></a>

```typescript
public resetPort(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadbalancerStaticBackendMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isConstruct"></a>

```typescript
import { loadbalancerStaticBackendMember } from '@cdktf/provider-upcloud'

loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformElement"></a>

```typescript
import { loadbalancerStaticBackendMember } from '@cdktf/provider-upcloud'

loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformResource"></a>

```typescript
import { loadbalancerStaticBackendMember } from '@cdktf/provider-upcloud'

loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.generateConfigForImport"></a>

```typescript
import { loadbalancerStaticBackendMember } from '@cdktf/provider-upcloud'

loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LoadbalancerStaticBackendMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadbalancerStaticBackendMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadbalancerStaticBackendMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/resources/loadbalancer_static_backend_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerStaticBackendMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.ipInput">ipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.maxSessionsInput">maxSessionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.maxSessions">maxSessions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.weight">weight</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.ipInput"></a>

```typescript
public readonly ipInput: string;
```

- *Type:* string

---

##### `maxSessionsInput`<sup>Optional</sup> <a name="maxSessionsInput" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.maxSessionsInput"></a>

```typescript
public readonly maxSessionsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `maxSessions`<sup>Required</sup> <a name="maxSessions" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.maxSessions"></a>

```typescript
public readonly maxSessions: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerStaticBackendMemberConfig <a name="LoadbalancerStaticBackendMemberConfig" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.Initializer"></a>

```typescript
import { loadbalancerStaticBackendMember } from '@cdktf/provider-upcloud'

const loadbalancerStaticBackendMemberConfig: loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.backend">backend</a></code> | <code>string</code> | ID of the load balancer backend to which the member is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.maxSessions">maxSessions</a></code> | <code>number</code> | Maximum number of sessions before queueing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.name">name</a></code> | <code>string</code> | The name of the member. Must be unique within within the load balancer backend. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.weight">weight</a></code> | <code>number</code> | Weight of the member. The higher the weight, the more traffic the member receives. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if the member is enabled. Disabled members are excluded from load balancing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.ip">ip</a></code> | <code>string</code> | Optional fallback IP address in case of failure on DNS resolving. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.port">port</a></code> | <code>number</code> | Server port. Port is optional and can be specified in DNS SRV record. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

ID of the load balancer backend to which the member is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/resources/loadbalancer_static_backend_member#backend LoadbalancerStaticBackendMember#backend}

---

##### `maxSessions`<sup>Required</sup> <a name="maxSessions" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.maxSessions"></a>

```typescript
public readonly maxSessions: number;
```

- *Type:* number

Maximum number of sessions before queueing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/resources/loadbalancer_static_backend_member#max_sessions LoadbalancerStaticBackendMember#max_sessions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the member. Must be unique within within the load balancer backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/resources/loadbalancer_static_backend_member#name LoadbalancerStaticBackendMember#name}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Weight of the member. The higher the weight, the more traffic the member receives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/resources/loadbalancer_static_backend_member#weight LoadbalancerStaticBackendMember#weight}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if the member is enabled. Disabled members are excluded from load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/resources/loadbalancer_static_backend_member#enabled LoadbalancerStaticBackendMember#enabled}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

Optional fallback IP address in case of failure on DNS resolving.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/resources/loadbalancer_static_backend_member#ip LoadbalancerStaticBackendMember#ip}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Server port. Port is optional and can be specified in DNS SRV record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/resources/loadbalancer_static_backend_member#port LoadbalancerStaticBackendMember#port}

---



